/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class Spices extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const products = [
            {
                productName: 'Demo',
                description: 'Initializing ledger with a dummy product'
            },
        ];

        for (let i = 0; i < products.length; i++) {
            products[i].docType = 'product';
            await ctx.stub.putState('Product' + i, Buffer.from(JSON.stringify(products[i])));
            console.info('Added <--> ', products[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryProduct(ctx, productId) {
        const productAsBytes = await ctx.stub.getState(productId); // get the product from chaincode state
        if (!productAsBytes || productAsBytes.length === 0) {
            throw new Error(`${productId} does not exist`);
        }
        console.log(productAsBytes.toString());
        return productAsBytes.toString();
    }

    async createProduct(ctx, productId, newProduct) {
        console.info('============= START : Create Product ===========');
        // console.log('From spices chaincode createProduct function: ' + 'prodid: ' + productId + ' newprod->field: ' + newProduct.Field_Location);
        // console.log('1: ' + newProduct)
        // console.log('4: ' + newProduct.substring(5,14))
        // console.log('2: ' + JSON.stringify(newProduct))
        // console.log('20: ' + JSON.parse(newProduct))
        // console.log('3: ' + JSON.parse(newProduct).Field_Location)

        const newProductJson = JSON.parse(newProduct)

        const product = {
            docType: 'product',
            productId: productId,
            ProductName: newProductJson.ProductName, 
            Farmer: newProductJson.Farmer,  
            Field_Location: newProductJson.Field_Location, 
            Farmer_Transfer_Date: newProductJson.Farmer_Transfer_Date, 
            Trader: newProductJson.Trader, 
            Trader_Location: newProductJson.Trader_Location, 
            Trader_Transfer_Date: newProductJson.Trader_Transfer_Date, 
            Manufacturer: newProductJson.Manufacturer, 
            Manufactured_Product_Name: newProductJson.Manufactured_Product_Name, 
            Brand_Name: newProductJson.Brand_Name, 
            Manufacturing_Unit_Location: newProductJson.Manufacturing_Unit_Location, 
            Manufacturer_Transfer_Date: newProductJson.Manufacturer_Transfer_Date, 
            Wholesaler: newProductJson.Wholesaler, 
            Wholesaler_Location: newProductJson.Wholesaler_Location, 
            Wholesaler_Transfer_Date: newProductJson.Wholesaler_Transfer_Date, 
            Retailer: newProductJson.Retailer, 
            Retailer_Location: newProductJson.Retailer_Location,
        };

        await ctx.stub.putState(productId, Buffer.from(JSON.stringify(product)));
        console.info('============= END : Create Product ===========');
    }

    async queryAllProducts(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    async updateProduct(ctx, productId, updatedProduct) {
        console.info('============= START : updateProduct ===========');

        const productAsBytes = await ctx.stub.getState(productId); // get the product from chaincode state
        if (!productAsBytes || productAsBytes.length === 0) {
            throw new Error(`${productId} does not exist`);
        }
        const product = JSON.parse(productAsBytes.toString());
        product.ProductName = updatedProduct.ProductName; 
        product.Farmer = updatedProduct.Farmer;
        product.Field_Location = updatedProduct.Field_Location;
        product.Farmer_Transfer_Date = updatedProduct.Farmer_Transfer_Date;
        product.Trader = updatedProduct.Trader;
        product.Trader_Location = updatedProduct.Trader_Location;
        product.Trader_Transfer_Date = updatedProduct.Trader_Transfer_Date;
        product.Manufacturer = updatedProduct.Manufacturer;
        product.Manufactured_Product_Name = updatedProduct.Manufactured_Product_Name; 
        product.Brand_Name = updatedProduct.Brand_Name;
        product.Manufacturing_Unit_Location = updatedProduct.Manufacturing_Unit_Location;
        product.Manufacturer_Transfer_Date = updatedProduct.Manufacturer_Transfer_Date;
        product.Wholesaler = updatedProduct.Wholesaler;
        product.Wholesaler_Location = updatedProduct.Wholesaler_Location;
        product.Wholesaler_Transfer_Date = updatedProduct.Wholesaler_Transfer_Date;
        product.Retailer = updatedProduct.Retailer; 
        product.Retailer_Location = updatedProduct.Retailer_Location;

        await ctx.stub.putState(productId, Buffer.from(JSON.stringify(product)));
        console.info('============= END : updateProduct ===========');
    }

}

module.exports = Spices;
