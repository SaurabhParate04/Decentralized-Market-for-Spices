#!/bin/bash
#
# Copyright IBM Corp All Rights Reserved
#
# SPDX-License-Identifier: Apache-2.0
#
# Exit on first error
set -e

cd ./javascript

node enrollAdmin.js Farmer
node enrollAdmin.js Trader
node enrollAdmin.js Manufacturer
node enrollAdmin.js Wholesaler
node enrollAdmin.js Retailer

