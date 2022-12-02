/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Wallets } = require('fabric-network');
const FabricCAServices = require('fabric-ca-client');
const fs = require('fs');
const path = require('path');
let args = process.argv.slice(2);
const user = args[0];
const usertype = args[1];
// console.log(user);

let org = '';

if(usertype === 'Farmer') {
    org = '1';
}
else if(usertype === 'Trader') {
    org = '2';
}
else if(usertype === 'Manufacturer') {
    org = '3';
}
else if(usertype === 'Wholesaler') {
    org = '4';
}
else if(usertype === 'Retailer') {
    org = '5';
}

async function registerUser() {
    try {
        // load the network configuration
        const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', `org${org}.example.com`, `connection-org${org}.json`);
        const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new CA client for interacting with the CA.
        const caURL = ccp.certificateAuthorities[`ca.org${org}.example.com`].url;
        const ca = new FabricCAServices(caURL);

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(__dirname, `wallet${org}`);
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userIdentity = await wallet.get(user);
        if (userIdentity) {
            console.log('An identity for the user "' + user + '" already exists in the wallet');
            return;
        }

        // Check to see if we've already enrolled the admin user.
        const adminIdentity = await wallet.get('admin');
        if (!adminIdentity) {
            console.log('An identity for the admin user "admin" does not exist in the wallet');
            console.log('Run the enrollAdmin.js application before retrying');
            return;
        }

        // build a user object for authenticating with the CA
        const provider = wallet.getProviderRegistry().getProvider(adminIdentity.type);
        const adminUser = await provider.getUserContext(adminIdentity, 'admin');

        // Register the user, enroll the user, and import the new identity into the wallet.
        const secret = await ca.register({
            affiliation: `org${org}.department1`,
            enrollmentID: user,
            role: 'client'
        }, adminUser);
        const enrollment = await ca.enroll({
            enrollmentID: user,
            enrollmentSecret: secret
        });
        const x509Identity = {
            credentials: {
                certificate: enrollment.certificate,
                privateKey: enrollment.key.toBytes(),
            },
            mspId: `Org${org}MSP`,
            type: 'X.509',
        };
        await wallet.put(user, x509Identity);
        console.log('Successfully registered and enrolled user "' + user + '" and imported it into the wallet');

    } catch (error) {
        console.error(`Failed to register user ${user}: ${error}`);
        process.exit(1);
    }
}

registerUser();