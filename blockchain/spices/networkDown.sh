#!/bin/bash
#
# Copyright IBM Corp All Rights Reserved
#
# SPDX-License-Identifier: Apache-2.0
#
# Exit on first error
set -ex

# Bring the test network down
pushd ../test-network
./network.sh down
popd

# clean out any old identites in the wallets
rm -rf javascript/wallet1/*
rm -rf javascript/wallet2/*
rm -rf javascript/wallet3/*
rm -rf javascript/wallet4/*
rm -rf javascript/wallet5/*
