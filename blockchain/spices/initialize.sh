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

node registerUser.js saurabhparatebusiness Farmer
node registerUser.js saurabhparatebusiness2 Trader
node registerUser.js saurabhparatebusiness3 Trader
node registerUser.js saurabhparatebusiness4 Manufacturer
node registerUser.js saurabhparatebusiness5 Wholesaler

EOF
