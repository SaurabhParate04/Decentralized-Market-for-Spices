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
            Manufactured_Product_Ingredients: newProductJson.Manufactured_Product_Ingredients,
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

    async transferProduct(ctx, productId, updatedProduct) {
        console.info('============= START : updateProduct ===========');
        const updatedProductJson = JSON.parse(updatedProduct)

        const productAsBytes = await ctx.stub.getState(productId); // get the product from chaincode state
        if (!productAsBytes || productAsBytes.length === 0) {
            throw new Error(`${productId} does not exist`);
        }

        const product = JSON.parse(productAsBytes.toString());

        if(updatedProductJson.to === 'Trader') {
            product.Farmer_Transfer_Date = updatedProductJson.Farmer_Transfer_Date;
            product.Trader = updatedProductJson.Trader;
            product.Trader_Location = updatedProductJson.Trader_Location;
        }
        else if(updatedProductJson.to === 'Farmer') {
            product.Farmer_Transfer_Date = updatedProductJson.Farmer_Transfer_Date;
            product.Farmer = updatedProductJson.Farmer;
            product.Field_Location = updatedProductJson.Field_Location;
        }
        else if(updatedProductJson.to === 'Manufacturer') {
            product.Trader_Transfer_Date = updatedProductJson.Trader_Transfer_Date;
            product.Manufacturer = updatedProductJson.Manufacturer;
            product.Manufacturing_Unit_Location = updatedProductJson.Manufacturing_Unit_Location;
            product.Manufactured_Product_Ingredients = updatedProductJson.Manufactured_Product_Ingredients;
        }
        else if(updatedProductJson.to === 'Wholesaler') {
            product.Manufacturer_Transfer_Date = updatedProductJson.Manufacturer_Transfer_Date;
            product.Brand_Name = product.Brand_Name;
            product.Manufactured_Product_Name = updatedProductJson.Manufactured_Product_Name;
            product.Wholesaler = updatedProductJson.Wholesaler;
            product.Wholesaler_Location = updatedProductJson.Wholesaler_Location;
        }
        else if(updatedProductJson.to === 'Retailer') {
            product.Wholesaler_Transfer_Date = updatedProductJson.Wholesaler_Transfer_Date;
            product.Retailer = updatedProductJson.Retailer;
            product.Retailer_Location = updatedProductJson.Retailer_Location;
        }

        // product.ProductName = updatedProductJson.ProductName; 
        // product.Farmer = updatedProductJson.Farmer;
        // product.Field_Location = updatedProductJson.Field_Location;
        // product.Farmer_Transfer_Date = updatedProductJson.Farmer_Transfer_Date;
        // product.Trader = updatedProductJson.Trader;
        // product.Trader_Location = updatedProductJson.Trader_Location;
        // product.Trader_Transfer_Date = updatedProductJson.Trader_Transfer_Date;
        // product.Manufacturer = updatedProductJson.Manufacturer;
        // product.Manufactured_Product_Name = updatedProductJson.Manufactured_Product_Name; 
        // product.Brand_Name = updatedProductJson.Brand_Name;
        // product.Manufacturing_Unit_Location = updatedProductJson.Manufacturing_Unit_Location;
        // product.Manufacturer_Transfer_Date = updatedProductJson.Manufacturer_Transfer_Date;
        // product.Wholesaler = updatedProductJson.Wholesaler;
        // product.Wholesaler_Location = updatedProductJson.Wholesaler_Location;
        // product.Wholesaler_Transfer_Date = updatedProductJson.Wholesaler_Transfer_Date;
        // product.Retailer = updatedProductJson.Retailer; 
        // product.Retailer_Location = updatedProductJson.Retailer_Location;

        await ctx.stub.putState(productId, Buffer.from(JSON.stringify(product)));
        console.info('============= END : updateProduct ===========');
    }

}

module.exports = Spices;
