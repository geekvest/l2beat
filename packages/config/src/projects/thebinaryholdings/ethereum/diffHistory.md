Generated with discovered.json: 0xc2fca7f8e502070a7e5b83912c459619f746ff5b

# Diff at Mon, 14 Jul 2025 12:46:37 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9f4300dad2f3d080cd56fa311d4a848556c74e72 block: 21429035
- current block number: 21429035

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    EOA  (0x000000000000000000000000000000000000dEaD) {
    +++ description: None
      address:
-        "0x000000000000000000000000000000000000dEaD"
+        "eth:0x000000000000000000000000000000000000dEaD"
    }
```

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      address:
-        "0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
+        "eth:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
      values.$admin:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      values.$implementation:
-        "0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"
+        "eth:0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"
      values.$pastUpgrades.0.2.0:
-        "0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"
+        "eth:0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"
      values.$pastUpgrades.1.2.0:
-        "0x14E08A30B7Bb79c9777149f53e2dbBA58eBa1104"
+        "eth:0x14E08A30B7Bb79c9777149f53e2dbBA58eBa1104"
      values.$pastUpgrades.2.2.0:
-        "0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"
+        "eth:0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"
      values.$pastUpgrades.3.2.0:
-        "0x14E08A30B7Bb79c9777149f53e2dbBA58eBa1104"
+        "eth:0x14E08A30B7Bb79c9777149f53e2dbBA58eBa1104"
      values.$pastUpgrades.4.2.0:
-        "0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"
+        "eth:0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"
+++ severity: HIGH
      values.challenger:
-        "0x79DdF0745D14783cDC2a05624c585Ddce07F4A02"
+        "eth:0x79DdF0745D14783cDC2a05624c585Ddce07F4A02"
      values.CHALLENGER:
-        "0x79DdF0745D14783cDC2a05624c585Ddce07F4A02"
+        "eth:0x79DdF0745D14783cDC2a05624c585Ddce07F4A02"
+++ severity: HIGH
      values.proposer:
-        "0xe615dC682b340e00c2d80472a281CbD5A2b68ae7"
+        "eth:0xe615dC682b340e00c2d80472a281CbD5A2b68ae7"
      values.PROPOSER:
-        "0xe615dC682b340e00c2d80472a281CbD5A2b68ae7"
+        "eth:0xe615dC682b340e00c2d80472a281CbD5A2b68ae7"
      implementationNames.0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e:
-        "Proxy"
      implementationNames.0xF8BE077b85C8553124918d4ECE132E0Fb634c86A:
-        "L2OutputOracle"
      implementationNames.eth:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e:
+        "Proxy"
      implementationNames.eth:0xF8BE077b85C8553124918d4ECE132E0Fb634c86A:
+        "L2OutputOracle"
    }
```

```diff
    contract L1ERC721Bridge (0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      address:
-        "0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
+        "eth:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
      values.$admin:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      values.$implementation:
-        "0xfb5bE2d53F1429897c485C109A2A4Ae062C2A2ce"
+        "eth:0xfb5bE2d53F1429897c485C109A2A4Ae062C2A2ce"
      values.$pastUpgrades.0.2.0:
-        "0xfb5bE2d53F1429897c485C109A2A4Ae062C2A2ce"
+        "eth:0xfb5bE2d53F1429897c485C109A2A4Ae062C2A2ce"
      values.messenger:
-        "0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
+        "eth:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
      values.MESSENGER:
-        "0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
+        "eth:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
      values.OTHER_BRIDGE:
-        "0x4200000000000000000000000000000000000014"
+        "eth:0x4200000000000000000000000000000000000014"
      values.otherBridge:
-        "0x4200000000000000000000000000000000000014"
+        "eth:0x4200000000000000000000000000000000000014"
      values.superchainConfig:
-        "0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
+        "eth:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
      implementationNames.0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378:
-        "Proxy"
      implementationNames.0xfb5bE2d53F1429897c485C109A2A4Ae062C2A2ce:
-        "L1ERC721Bridge"
      implementationNames.eth:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378:
+        "Proxy"
      implementationNames.eth:0xfb5bE2d53F1429897c485C109A2A4Ae062C2A2ce:
+        "L1ERC721Bridge"
    }
```

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      address:
-        "0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
+        "eth:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
      values.$admin:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      values.$implementation:
-        "0x0F4D0486B8628Fb6351EE3E63a95e104dDB2FB0F"
+        "eth:0x0F4D0486B8628Fb6351EE3E63a95e104dDB2FB0F"
      values.$pastUpgrades.0.2.0:
-        "0x0F4D0486B8628Fb6351EE3E63a95e104dDB2FB0F"
+        "eth:0x0F4D0486B8628Fb6351EE3E63a95e104dDB2FB0F"
      values.guardian:
-        "0x87aab081Ac9F8ce80fb048f23280DF019036BA1d"
+        "eth:0x87aab081Ac9F8ce80fb048f23280DF019036BA1d"
      implementationNames.0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12:
-        "Proxy"
      implementationNames.0x0F4D0486B8628Fb6351EE3E63a95e104dDB2FB0F:
-        "SuperchainConfig"
      implementationNames.eth:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12:
+        "Proxy"
      implementationNames.eth:0x0F4D0486B8628Fb6351EE3E63a95e104dDB2FB0F:
+        "SuperchainConfig"
    }
```

```diff
    contract ProxyAdmin (0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF) {
    +++ description: None
      address:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      values.addressManager:
-        "0x8173904703995c6BbA59a42B8bBf8405F978758a"
+        "eth:0x8173904703995c6BbA59a42B8bBf8405F978758a"
      values.owner:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      implementationNames.0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF:
-        "ProxyAdmin"
      implementationNames.eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF:
+        "ProxyAdmin"
    }
```

```diff
    contract TBHMultisig (0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3) {
    +++ description: None
      address:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x666372fEfB85dA96a1a56667638321605afe95bC"
+        "eth:0x666372fEfB85dA96a1a56667638321605afe95bC"
      values.$members.1:
-        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
+        "eth:0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      implementationNames.0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      address:
-        "0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
+        "eth:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
      values.$admin:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      values.$implementation:
-        "0x1554F55Bd54DAC8e8164C33ce156F13e9c0d1B46"
+        "eth:0x1554F55Bd54DAC8e8164C33ce156F13e9c0d1B46"
      values.$pastUpgrades.0.2.0:
-        "0x1554F55Bd54DAC8e8164C33ce156F13e9c0d1B46"
+        "eth:0x1554F55Bd54DAC8e8164C33ce156F13e9c0d1B46"
      values.guardian:
-        "0x87aab081Ac9F8ce80fb048f23280DF019036BA1d"
+        "eth:0x87aab081Ac9F8ce80fb048f23280DF019036BA1d"
      values.l2Oracle:
-        "0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
+        "eth:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
      values.l2Sender:
-        "0x000000000000000000000000000000000000dEaD"
+        "eth:0x000000000000000000000000000000000000dEaD"
      values.superchainConfig:
-        "0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
+        "eth:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
      values.systemConfig:
-        "0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "eth:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      implementationNames.0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A:
-        "Proxy"
      implementationNames.0x1554F55Bd54DAC8e8164C33ce156F13e9c0d1B46:
-        "OptimismPortal"
      implementationNames.eth:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A:
+        "Proxy"
      implementationNames.eth:0x1554F55Bd54DAC8e8164C33ce156F13e9c0d1B46:
+        "OptimismPortal"
    }
```

```diff
    EOA  (0x666372fEfB85dA96a1a56667638321605afe95bC) {
    +++ description: None
      address:
-        "0x666372fEfB85dA96a1a56667638321605afe95bC"
+        "eth:0x666372fEfB85dA96a1a56667638321605afe95bC"
    }
```

```diff
    EOA  (0x666bfb2Bac23cf5fE3308301A3c5130f92D96B07) {
    +++ description: None
      address:
-        "0x666bfb2Bac23cf5fE3308301A3c5130f92D96B07"
+        "eth:0x666bfb2Bac23cf5fE3308301A3c5130f92D96B07"
    }
```

```diff
    EOA  (0x68d5BBf3a01ECbB47CE38Cf64a7d6C0eA618040f) {
    +++ description: None
      address:
-        "0x68d5BBf3a01ECbB47CE38Cf64a7d6C0eA618040f"
+        "eth:0x68d5BBf3a01ECbB47CE38Cf64a7d6C0eA618040f"
    }
```

```diff
    EOA  (0x79DdF0745D14783cDC2a05624c585Ddce07F4A02) {
    +++ description: None
      address:
-        "0x79DdF0745D14783cDC2a05624c585Ddce07F4A02"
+        "eth:0x79DdF0745D14783cDC2a05624c585Ddce07F4A02"
    }
```

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      address:
-        "0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "eth:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      values.$admin:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      values.$implementation:
-        "0xB7a1e72da74DF4CB498Ded5c45653374A6CC7097"
+        "eth:0xB7a1e72da74DF4CB498Ded5c45653374A6CC7097"
      values.$pastUpgrades.0.2.0:
-        "0xB7a1e72da74DF4CB498Ded5c45653374A6CC7097"
+        "eth:0xB7a1e72da74DF4CB498Ded5c45653374A6CC7097"
      values.batcherHash:
-        "0x68d5BBf3a01ECbB47CE38Cf64a7d6C0eA618040f"
+        "eth:0x68d5BBf3a01ECbB47CE38Cf64a7d6C0eA618040f"
      values.batchInbox:
-        "0xFF00000000000000000000000000000000000624"
+        "eth:0xFF00000000000000000000000000000000000624"
      values.disputeGameFactory:
-        "0x0D7e0590c58e4aC9B14B3eD6163CF55223931699"
+        "eth:0x0D7e0590c58e4aC9B14B3eD6163CF55223931699"
      values.gasPayingToken.addr_:
-        "0x04E9D7e336f79Cdab911b06133D3Ca2Cd0721ce3"
+        "eth:0x04E9D7e336f79Cdab911b06133D3Ca2Cd0721ce3"
      values.l1CrossDomainMessenger:
-        "0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
+        "eth:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
      values.l1ERC721Bridge:
-        "0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
+        "eth:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
      values.l1StandardBridge:
-        "0xD1B30378CBF968E5525e8835219A5726A1e71D10"
+        "eth:0xD1B30378CBF968E5525e8835219A5726A1e71D10"
      values.optimismMintableERC20Factory:
-        "0xa641e14B685b5E652865e14A4fBc07e51371D124"
+        "eth:0xa641e14B685b5E652865e14A4fBc07e51371D124"
      values.optimismPortal:
-        "0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
+        "eth:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
      values.owner:
-        "0x666372fEfB85dA96a1a56667638321605afe95bC"
+        "eth:0x666372fEfB85dA96a1a56667638321605afe95bC"
      values.sequencerInbox:
-        "0xFF00000000000000000000000000000000000624"
+        "eth:0xFF00000000000000000000000000000000000624"
      values.unsafeBlockSigner:
-        "0x666bfb2Bac23cf5fE3308301A3c5130f92D96B07"
+        "eth:0x666bfb2Bac23cf5fE3308301A3c5130f92D96B07"
      implementationNames.0x7aC7e5989EaC278B7BbfeF560871a2026baD472c:
-        "Proxy"
      implementationNames.0xB7a1e72da74DF4CB498Ded5c45653374A6CC7097:
-        "SystemConfig"
      implementationNames.eth:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c:
+        "Proxy"
      implementationNames.eth:0xB7a1e72da74DF4CB498Ded5c45653374A6CC7097:
+        "SystemConfig"
    }
```

```diff
    contract L1CrossDomainMessenger (0x807d21e416434ae92c8E5bcA4d506781aFbBa380) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      address:
-        "0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
+        "eth:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
      values.$admin:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      values.$implementation:
-        "0x48455CB9bB2407C3e8De538B884bBec5aCbaa137"
+        "eth:0x48455CB9bB2407C3e8De538B884bBec5aCbaa137"
      values.$pastUpgrades.0.2.0:
-        "0x48455CB9bB2407C3e8De538B884bBec5aCbaa137"
+        "eth:0x48455CB9bB2407C3e8De538B884bBec5aCbaa137"
      values.OTHER_MESSENGER:
-        "0x4200000000000000000000000000000000000007"
+        "eth:0x4200000000000000000000000000000000000007"
      values.otherMessenger:
-        "0x4200000000000000000000000000000000000007"
+        "eth:0x4200000000000000000000000000000000000007"
      values.portal:
-        "0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
+        "eth:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
      values.PORTAL:
-        "0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
+        "eth:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
      values.ResolvedDelegateProxy_addressManager:
-        "0x8173904703995c6BbA59a42B8bBf8405F978758a"
+        "eth:0x8173904703995c6BbA59a42B8bBf8405F978758a"
      values.superchainConfig:
-        "0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
+        "eth:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
      values.systemConfig:
-        "0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "eth:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      implementationNames.0x807d21e416434ae92c8E5bcA4d506781aFbBa380:
-        "ResolvedDelegateProxy"
      implementationNames.0x48455CB9bB2407C3e8De538B884bBec5aCbaa137:
-        "L1CrossDomainMessenger"
      implementationNames.eth:0x807d21e416434ae92c8E5bcA4d506781aFbBa380:
+        "ResolvedDelegateProxy"
      implementationNames.eth:0x48455CB9bB2407C3e8De538B884bBec5aCbaa137:
+        "L1CrossDomainMessenger"
    }
```

```diff
    contract AddressManager (0x8173904703995c6BbA59a42B8bBf8405F978758a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      address:
-        "0x8173904703995c6BbA59a42B8bBf8405F978758a"
+        "eth:0x8173904703995c6BbA59a42B8bBf8405F978758a"
      values.owner:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      implementationNames.0x8173904703995c6BbA59a42B8bBf8405F978758a:
-        "AddressManager"
      implementationNames.eth:0x8173904703995c6BbA59a42B8bBf8405F978758a:
+        "AddressManager"
    }
```

```diff
    EOA  (0x87aab081Ac9F8ce80fb048f23280DF019036BA1d) {
    +++ description: None
      address:
-        "0x87aab081Ac9F8ce80fb048f23280DF019036BA1d"
+        "eth:0x87aab081Ac9F8ce80fb048f23280DF019036BA1d"
    }
```

```diff
    contract OptimismMintableERC20Factory (0xa641e14B685b5E652865e14A4fBc07e51371D124) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa.
      address:
-        "0xa641e14B685b5E652865e14A4fBc07e51371D124"
+        "eth:0xa641e14B685b5E652865e14A4fBc07e51371D124"
      values.$admin:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      values.$implementation:
-        "0x343CC6af2CD31aF51655AE75D19D51ec49a89b7A"
+        "eth:0x343CC6af2CD31aF51655AE75D19D51ec49a89b7A"
      values.$pastUpgrades.0.2.0:
-        "0x343CC6af2CD31aF51655AE75D19D51ec49a89b7A"
+        "eth:0x343CC6af2CD31aF51655AE75D19D51ec49a89b7A"
      values.bridge:
-        "0xD1B30378CBF968E5525e8835219A5726A1e71D10"
+        "eth:0xD1B30378CBF968E5525e8835219A5726A1e71D10"
      values.BRIDGE:
-        "0xD1B30378CBF968E5525e8835219A5726A1e71D10"
+        "eth:0xD1B30378CBF968E5525e8835219A5726A1e71D10"
      implementationNames.0xa641e14B685b5E652865e14A4fBc07e51371D124:
-        "Proxy"
      implementationNames.0x343CC6af2CD31aF51655AE75D19D51ec49a89b7A:
-        "OptimismMintableERC20Factory"
      implementationNames.eth:0xa641e14B685b5E652865e14A4fBc07e51371D124:
+        "Proxy"
      implementationNames.eth:0x343CC6af2CD31aF51655AE75D19D51ec49a89b7A:
+        "OptimismMintableERC20Factory"
    }
```

```diff
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      address:
-        "0xD1B30378CBF968E5525e8835219A5726A1e71D10"
+        "eth:0xD1B30378CBF968E5525e8835219A5726A1e71D10"
      values.$admin:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      values.$implementation:
-        "0x1BcF2686F42e856520f0C16de82c2cF8bb50Ae77"
+        "eth:0x1BcF2686F42e856520f0C16de82c2cF8bb50Ae77"
      values.l2TokenBridge:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      values.messenger:
-        "0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
+        "eth:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
      values.MESSENGER:
-        "0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
+        "eth:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
      values.OTHER_BRIDGE:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      values.otherBridge:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      values.superchainConfig:
-        "0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
+        "eth:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
      values.systemConfig:
-        "0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "eth:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      implementationNames.0xD1B30378CBF968E5525e8835219A5726A1e71D10:
-        "L1ChugSplashProxy"
      implementationNames.0x1BcF2686F42e856520f0C16de82c2cF8bb50Ae77:
-        "L1StandardBridge"
      implementationNames.eth:0xD1B30378CBF968E5525e8835219A5726A1e71D10:
+        "L1ChugSplashProxy"
      implementationNames.eth:0x1BcF2686F42e856520f0C16de82c2cF8bb50Ae77:
+        "L1StandardBridge"
    }
```

```diff
    EOA  (0xE559cf25AE191566d4A2E1cd5A533475179672A0) {
    +++ description: None
      address:
-        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
+        "eth:0xE559cf25AE191566d4A2E1cd5A533475179672A0"
    }
```

```diff
    EOA  (0xe615dC682b340e00c2d80472a281CbD5A2b68ae7) {
    +++ description: None
      address:
-        "0xe615dC682b340e00c2d80472a281CbD5A2b68ae7"
+        "eth:0xe615dC682b340e00c2d80472a281CbD5A2b68ae7"
    }
```

```diff
    EOA  (0xFF00000000000000000000000000000000000624) {
    +++ description: None
      address:
-        "0xFF00000000000000000000000000000000000624"
+        "eth:0xFF00000000000000000000000000000000000624"
    }
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e)
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378)
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12)
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF)
    +++ description: None
```

```diff
+   Status: CREATED
    contract TBHMultisig (0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A)
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
```

```diff
+   Status: CREATED
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c)
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x807d21e416434ae92c8E5bcA4d506781aFbBa380)
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
```

```diff
+   Status: CREATED
    contract AddressManager (0x8173904703995c6BbA59a42B8bBf8405F978758a)
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0xa641e14B685b5E652865e14A4fBc07e51371D124)
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa.
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10)
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
```

Generated with discovered.json: 0xfed1494c27a025d888278bf4827db22a4e6eccdd

# Diff at Mon, 14 Jul 2025 08:02:47 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@0dc82cd5064c9c6dc9fb20e2291a8bb6b2048e27 block: 21429035
- current block number: 21429035

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract OptimismMintableERC20Factory (0xa641e14B685b5E652865e14A4fBc07e51371D124) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa.
      description:
-        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."
+        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa."
    }
```

Generated with discovered.json: 0x734d301c9faf6e1b951ff4c43e082bd342720718

# Diff at Fri, 04 Jul 2025 12:19:25 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f56dc47fe915564d4555300304da4d3bcbc087f block: 21429035
- current block number: 21429035

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF) {
    +++ description: None
      directlyReceivedPermissions.0.from:
-        "ethereum:0x8173904703995c6BbA59a42B8bBf8405F978758a"
+        "eth:0x8173904703995c6BbA59a42B8bBf8405F978758a"
      directlyReceivedPermissions.1.from:
-        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
+        "eth:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
      directlyReceivedPermissions.2.from:
-        "ethereum:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
+        "eth:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
      directlyReceivedPermissions.3.from:
-        "ethereum:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
+        "eth:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
      directlyReceivedPermissions.4.from:
-        "ethereum:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
+        "eth:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
      directlyReceivedPermissions.5.from:
-        "ethereum:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "eth:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      directlyReceivedPermissions.6.from:
-        "ethereum:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
+        "eth:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
      directlyReceivedPermissions.7.from:
-        "ethereum:0xa641e14B685b5E652865e14A4fBc07e51371D124"
+        "eth:0xa641e14B685b5E652865e14A4fBc07e51371D124"
      directlyReceivedPermissions.8.from:
-        "ethereum:0xD1B30378CBF968E5525e8835219A5726A1e71D10"
+        "eth:0xD1B30378CBF968E5525e8835219A5726A1e71D10"
    }
```

```diff
    contract TBHMultisig (0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3) {
    +++ description: None
      directlyReceivedPermissions.0.from:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
    }
```

```diff
    EOA  (0x666372fEfB85dA96a1a56667638321605afe95bC) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "eth:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      receivedPermissions.1.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.1.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.1.from:
-        "ethereum:0x8173904703995c6BbA59a42B8bBf8405F978758a"
+        "eth:0x8173904703995c6BbA59a42B8bBf8405F978758a"
      receivedPermissions.2.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.2.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.2.from:
-        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
+        "eth:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
      receivedPermissions.3.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.3.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.3.from:
-        "ethereum:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
+        "eth:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
      receivedPermissions.4.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.4.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.4.from:
-        "ethereum:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
+        "eth:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
      receivedPermissions.5.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.5.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.5.from:
-        "ethereum:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
+        "eth:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
      receivedPermissions.6.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.6.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.6.from:
-        "ethereum:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "eth:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      receivedPermissions.7.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.7.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.7.from:
-        "ethereum:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
+        "eth:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
      receivedPermissions.8.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.8.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.8.from:
-        "ethereum:0xa641e14B685b5E652865e14A4fBc07e51371D124"
+        "eth:0xa641e14B685b5E652865e14A4fBc07e51371D124"
      receivedPermissions.9.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.9.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.9.from:
-        "ethereum:0xD1B30378CBF968E5525e8835219A5726A1e71D10"
+        "eth:0xD1B30378CBF968E5525e8835219A5726A1e71D10"
    }
```

```diff
    EOA  (0x68d5BBf3a01ECbB47CE38Cf64a7d6C0eA618040f) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "eth:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
    }
```

```diff
    EOA  (0x79DdF0745D14783cDC2a05624c585Ddce07F4A02) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
+        "eth:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
      receivedPermissions.1.from:
-        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
+        "eth:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
    }
```

```diff
    EOA  (0x87aab081Ac9F8ce80fb048f23280DF019036BA1d) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
+        "eth:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
      receivedPermissions.1.from:
-        "ethereum:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
+        "eth:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
    }
```

```diff
    EOA  (0xE559cf25AE191566d4A2E1cd5A533475179672A0) {
    +++ description: None
      receivedPermissions.0.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.0.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.0.from:
-        "ethereum:0x8173904703995c6BbA59a42B8bBf8405F978758a"
+        "eth:0x8173904703995c6BbA59a42B8bBf8405F978758a"
      receivedPermissions.1.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.1.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.1.from:
-        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
+        "eth:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
      receivedPermissions.2.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.2.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.2.from:
-        "ethereum:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
+        "eth:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
      receivedPermissions.3.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.3.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.3.from:
-        "ethereum:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
+        "eth:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
      receivedPermissions.4.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.4.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.4.from:
-        "ethereum:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
+        "eth:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
      receivedPermissions.5.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.5.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.5.from:
-        "ethereum:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "eth:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      receivedPermissions.6.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.6.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.6.from:
-        "ethereum:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
+        "eth:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
      receivedPermissions.7.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.7.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.7.from:
-        "ethereum:0xa641e14B685b5E652865e14A4fBc07e51371D124"
+        "eth:0xa641e14B685b5E652865e14A4fBc07e51371D124"
      receivedPermissions.8.via.1.address:
-        "ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "eth:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      receivedPermissions.8.via.0.address:
-        "ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "eth:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      receivedPermissions.8.from:
-        "ethereum:0xD1B30378CBF968E5525e8835219A5726A1e71D10"
+        "eth:0xD1B30378CBF968E5525e8835219A5726A1e71D10"
    }
```

```diff
    EOA  (0xe615dC682b340e00c2d80472a281CbD5A2b68ae7) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
+        "eth:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
      receivedPermissions.1.from:
-        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
+        "eth:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
    }
```

Generated with discovered.json: 0x4d122097234e6b8a210134e9914d14dfcca798d8

# Diff at Mon, 16 Jun 2025 08:43:28 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e1208475abce20cea1768d2e4878c03350c1b7c9 block: 21429035
- current block number: 21429035

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF) {
    +++ description: None
      directlyReceivedPermissions.8:
+        {"permission":"upgrade","from":"ethereum:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12","role":"admin"}
      directlyReceivedPermissions.7.from:
-        "ethereum:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
+        "ethereum:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
      directlyReceivedPermissions.6.from:
-        "ethereum:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
+        "ethereum:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      directlyReceivedPermissions.5.from:
-        "ethereum:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
      directlyReceivedPermissions.4.from:
-        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
+        "ethereum:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
      directlyReceivedPermissions.3.from:
-        "ethereum:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
+        "ethereum:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
    }
```

```diff
    EOA  (0x666372fEfB85dA96a1a56667638321605afe95bC) {
    +++ description: None
      receivedPermissions.9:
+        {"permission":"upgrade","from":"ethereum:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12","role":"admin","via":[{"address":"ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"},{"address":"ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"}]}
      receivedPermissions.8.from:
-        "ethereum:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
+        "ethereum:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
      receivedPermissions.7.from:
-        "ethereum:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
+        "ethereum:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      receivedPermissions.6.from:
-        "ethereum:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
      receivedPermissions.5.from:
-        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
+        "ethereum:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
      receivedPermissions.4.from:
-        "ethereum:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
+        "ethereum:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
    }
```

```diff
    contract L1CrossDomainMessenger (0x807d21e416434ae92c8E5bcA4d506781aFbBa380) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$admin:
+        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
    }
```

```diff
    EOA  (0xE559cf25AE191566d4A2E1cd5A533475179672A0) {
    +++ description: None
      receivedPermissions.8:
+        {"permission":"upgrade","from":"ethereum:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12","role":"admin","via":[{"address":"ethereum:0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"},{"address":"ethereum:0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"}]}
      receivedPermissions.7.from:
-        "ethereum:0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
+        "ethereum:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
      receivedPermissions.6.from:
-        "ethereum:0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
+        "ethereum:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      receivedPermissions.5.from:
-        "ethereum:0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
      receivedPermissions.4.from:
-        "ethereum:0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
+        "ethereum:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
      receivedPermissions.3.from:
-        "ethereum:0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
+        "ethereum:0x807d21e416434ae92c8E5bcA4d506781aFbBa380"
    }
```

Generated with discovered.json: 0x1dce9cc6a4cf1d1b73d37f6f256d3f40511db02d

# Diff at Fri, 30 May 2025 07:17:45 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@a4d8c436027d17df0f9b76843cd6deb1888fa381 block: 21429035
- current block number: 21429035

## Description

config: change comment about eip1559 fee val

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      fieldMeta.eip1559Denominator:
+        {"description":"volatility param: lower denominator -> quicker fee changes on L2"}
    }
```

Generated with discovered.json: 0xf7bf7165698bb8071aded4b856a83706d4e8a4d3

# Diff at Fri, 23 May 2025 09:41:06 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 21429035
- current block number: 21429035

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF) {
    +++ description: None
      directlyReceivedPermissions.7.role:
+        "admin"
      directlyReceivedPermissions.6.role:
+        "admin"
      directlyReceivedPermissions.5.role:
+        "admin"
      directlyReceivedPermissions.4.role:
+        "admin"
      directlyReceivedPermissions.3.role:
+        "admin"
      directlyReceivedPermissions.2.permission:
-        "interact"
+        "upgrade"
      directlyReceivedPermissions.2.from:
-        "0x8173904703995c6BbA59a42B8bBf8405F978758a"
+        "0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      directlyReceivedPermissions.2.description:
-        "set and change address mappings."
      directlyReceivedPermissions.2.role:
+        "admin"
      directlyReceivedPermissions.1.permission:
-        "upgrade"
+        "interact"
      directlyReceivedPermissions.1.from:
-        "0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "0x8173904703995c6BbA59a42B8bBf8405F978758a"
      directlyReceivedPermissions.1.description:
+        "set and change address mappings."
      directlyReceivedPermissions.1.role:
+        ".owner"
      directlyReceivedPermissions.0.role:
+        ".$admin"
    }
```

```diff
    contract TBHMultisig (0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3) {
    +++ description: None
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    EOA  (0x666372fEfB85dA96a1a56667638321605afe95bC) {
    +++ description: None
      receivedPermissions.8.role:
+        "admin"
      receivedPermissions.7.role:
+        "admin"
      receivedPermissions.6.role:
+        "admin"
      receivedPermissions.5.role:
+        "admin"
      receivedPermissions.4.role:
+        "admin"
      receivedPermissions.3.permission:
-        "interact"
+        "upgrade"
      receivedPermissions.3.from:
-        "0x8173904703995c6BbA59a42B8bBf8405F978758a"
+        "0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      receivedPermissions.3.description:
-        "set and change address mappings."
      receivedPermissions.3.role:
+        "admin"
      receivedPermissions.2.permission:
-        "upgrade"
+        "interact"
      receivedPermissions.2.from:
-        "0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "0x8173904703995c6BbA59a42B8bBf8405F978758a"
      receivedPermissions.2.description:
+        "set and change address mappings."
      receivedPermissions.2.role:
+        ".owner"
      receivedPermissions.1.role:
+        ".$admin"
      receivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    EOA  (0x68d5BBf3a01ECbB47CE38Cf64a7d6C0eA618040f) {
    +++ description: None
      receivedPermissions.0.role:
+        ".batcherHash"
    }
```

```diff
    EOA  (0x79DdF0745D14783cDC2a05624c585Ddce07F4A02) {
    +++ description: None
      receivedPermissions.1:
+        {"permission":"challenge","from":"0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e","role":".CHALLENGER"}
      receivedPermissions.0.role:
+        ".challenger"
    }
```

```diff
    EOA  (0x87aab081Ac9F8ce80fb048f23280DF019036BA1d) {
    +++ description: None
      receivedPermissions.1.role:
+        ".guardian"
      receivedPermissions.0.role:
+        ".guardian"
    }
```

```diff
    EOA  (0xE559cf25AE191566d4A2E1cd5A533475179672A0) {
    +++ description: None
      receivedPermissions.7.role:
+        "admin"
      receivedPermissions.6.role:
+        "admin"
      receivedPermissions.5.role:
+        "admin"
      receivedPermissions.4.role:
+        "admin"
      receivedPermissions.3.role:
+        "admin"
      receivedPermissions.2.permission:
-        "interact"
+        "upgrade"
      receivedPermissions.2.from:
-        "0x8173904703995c6BbA59a42B8bBf8405F978758a"
+        "0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      receivedPermissions.2.description:
-        "set and change address mappings."
      receivedPermissions.2.role:
+        "admin"
      receivedPermissions.1.permission:
-        "upgrade"
+        "interact"
      receivedPermissions.1.from:
-        "0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
+        "0x8173904703995c6BbA59a42B8bBf8405F978758a"
      receivedPermissions.1.description:
+        "set and change address mappings."
      receivedPermissions.1.role:
+        ".owner"
      receivedPermissions.0.role:
+        ".$admin"
    }
```

```diff
    EOA  (0xe615dC682b340e00c2d80472a281CbD5A2b68ae7) {
    +++ description: None
      receivedPermissions.1:
+        {"permission":"propose","from":"0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e","role":".proposer"}
      receivedPermissions.0.role:
+        ".PROPOSER"
    }
```

Generated with discovered.json: 0x1ff9d7f859e8ad38a4c6460c83c9baea73dddca3

# Diff at Tue, 06 May 2025 10:56:58 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@3a394513711f46aa66871603365b6afb40a79057 block: 21429035
- current block number: 21429035

## Description

Marking EOAs if they control the highest number of upgrade permissions in the project.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    EOA  (0x666372fEfB85dA96a1a56667638321605afe95bC) {
    +++ description: None
      controlsMajorityOfUpgradePermissions:
+        true
    }
```

```diff
    EOA  (0xE559cf25AE191566d4A2E1cd5A533475179672A0) {
    +++ description: None
      controlsMajorityOfUpgradePermissions:
+        true
    }
```

Generated with discovered.json: 0xca383899a72cc2386a54ac5ebad0a1eb50003fae

# Diff at Tue, 29 Apr 2025 08:19:14 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 21429035
- current block number: 21429035

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions:
-        [{"permission":"challenge","to":"0x79DdF0745D14783cDC2a05624c585Ddce07F4A02","via":[]},{"permission":"propose","to":"0xe615dC682b340e00c2d80472a281CbD5A2b68ae7","via":[]},{"permission":"upgrade","to":"0x666372fEfB85dA96a1a56667638321605afe95bC","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","to":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]}]
    }
```

```diff
    contract L1ERC721Bridge (0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x666372fEfB85dA96a1a56667638321605afe95bC","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","to":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]}]
    }
```

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions:
-        [{"permission":"guard","to":"0x87aab081Ac9F8ce80fb048f23280DF019036BA1d","via":[]},{"permission":"upgrade","to":"0x666372fEfB85dA96a1a56667638321605afe95bC","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","to":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]}]
    }
```

```diff
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions:
-        [{"permission":"guard","to":"0x87aab081Ac9F8ce80fb048f23280DF019036BA1d","via":[]},{"permission":"upgrade","to":"0x666372fEfB85dA96a1a56667638321605afe95bC","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","to":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]}]
    }
```

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions:
-        [{"permission":"interact","to":"0x666372fEfB85dA96a1a56667638321605afe95bC","description":"it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system.","via":[]},{"permission":"sequence","to":"0x68d5BBf3a01ECbB47CE38Cf64a7d6C0eA618040f","via":[]},{"permission":"upgrade","to":"0x666372fEfB85dA96a1a56667638321605afe95bC","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","to":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]}]
    }
```

```diff
    contract AddressManager (0x8173904703995c6BbA59a42B8bBf8405F978758a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions:
-        [{"permission":"interact","to":"0x666372fEfB85dA96a1a56667638321605afe95bC","description":"set and change address mappings.","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"interact","to":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","description":"set and change address mappings.","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]}]
    }
```

```diff
    contract OptimismMintableERC20Factory (0xa641e14B685b5E652865e14A4fBc07e51371D124) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x666372fEfB85dA96a1a56667638321605afe95bC","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","to":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]}]
    }
```

```diff
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x666372fEfB85dA96a1a56667638321605afe95bC","description":"upgrading the bridge implementation can give access to all funds escrowed therein.","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","to":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","description":"upgrading the bridge implementation can give access to all funds escrowed therein.","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]}]
    }
```

Generated with discovered.json: 0x491ec75a8a2e98aaf73cbebd093de963c228b486

# Diff at Thu, 27 Mar 2025 11:15:36 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@8cc2e36080df3a74dfd8475d41c64f46203f5218 block: 21429035
- current block number: 21429035

## Description

Config related: add guardian description details, hide some noisy values, hide AddressManager as spam cat, add proposer / challenger to permissioned opfp chains.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract AddressManager (0x8173904703995c6BbA59a42B8bBf8405F978758a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      category:
+        {"name":"Spam","priority":-1}
    }
```

Generated with discovered.json: 0x9d2418f370d36066b338323cf62a34546eeb4959

# Diff at Wed, 19 Mar 2025 13:05:49 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e950b6e93c84855ee2ec1740913b7b4c994b9ae2 block: 21429035
- current block number: 21429035

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract undefined (0x79DdF0745D14783cDC2a05624c585Ddce07F4A02) {
    +++ description: None
      severity:
-        "HIGH"
    }
```

```diff
    contract undefined (0xe615dC682b340e00c2d80472a281CbD5A2b68ae7) {
    +++ description: None
      severity:
-        "HIGH"
    }
```

Generated with discovered.json: 0x754519b7b040ae138db4298148d3639a0ec71a02

# Diff at Tue, 04 Mar 2025 11:26:43 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@be38e12d3ff947ca8de40f3a23a9ba1875a54f5a block: 21429035
- current block number: 21429035

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isSomeTxsLengthEqualToCelestiaDAExample:
-        false
      values.opStackDA.isUsingCelestia:
+        false
    }
```

Generated with discovered.json: 0x17e1eb3970e4d4876ceeb56706abbbb784286481

# Diff at Tue, 04 Mar 2025 10:40:08 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 21429035
- current block number: 21429035

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      sinceBlock:
+        20175344
    }
```

```diff
    contract L1ERC721Bridge (0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      sinceBlock:
+        20175341
    }
```

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      sinceBlock:
+        20175330
    }
```

```diff
    contract ProxyAdmin (0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF) {
    +++ description: None
      sinceBlock:
+        20175327
    }
```

```diff
    contract TBHMultisig (0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3) {
    +++ description: None
      sinceBlock:
+        20175325
    }
```

```diff
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      sinceBlock:
+        20175336
    }
```

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      sinceBlock:
+        20175337
    }
```

```diff
    contract L1CrossDomainMessenger (0x807d21e416434ae92c8E5bcA4d506781aFbBa380) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      sinceBlock:
+        20175339
    }
```

```diff
    contract AddressManager (0x8173904703995c6BbA59a42B8bBf8405F978758a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      sinceBlock:
+        20175326
    }
```

```diff
    contract OptimismMintableERC20Factory (0xa641e14B685b5E652865e14A4fBc07e51371D124) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      sinceBlock:
+        20175340
    }
```

```diff
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      sinceBlock:
+        20175338
    }
```

Generated with discovered.json: 0x15fd530faed1e9e5ac3e6916142f27e7b8e36ecd

# Diff at Wed, 26 Feb 2025 10:33:14 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@18513668f913fbe57a197f43655b19111df0e627 block: 21429035
- current block number: 21429035

## Description

config related: added categories for all opstack, op stack and polygoncdk stack templates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract L1ERC721Bridge (0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      category:
+        {"name":"Governance","priority":3}
    }
```

```diff
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract L1CrossDomainMessenger (0x807d21e416434ae92c8E5bcA4d506781aFbBa380) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

Generated with discovered.json: 0x87873c1e7f721da7407a114846a4f73f71f23bfc

# Diff at Fri, 21 Feb 2025 14:11:38 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@d219f271711b2cf7a164e3443bead5e4957d13a8 block: 21429035
- current block number: 21429035

## Description

Config related: Change some severities and add templates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      fieldMeta.proposer:
+        {"severity":"HIGH"}
      fieldMeta.challenger:
+        {"severity":"HIGH"}
      fieldMeta.deletedOutputs:
+        {"severity":"HIGH"}
    }
```

Generated with discovered.json: 0xab519d52ebf0d7e1bc5e82b1f5722b6314b08587

# Diff at Fri, 21 Feb 2025 09:00:24 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1cf9ec35847912163c4b663a633e258a434c0bca block: 21429035
- current block number: 21429035

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      categories:
-        ["Upgrades&Governance"]
    }
```

```diff
    contract L1CrossDomainMessenger (0x807d21e416434ae92c8E5bcA4d506781aFbBa380) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      categories:
-        ["Core"]
    }
```

```diff
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      categories:
-        ["Gateways&Escrows"]
    }
```

Generated with discovered.json: 0x4e4aaad75cdbb666305d18ebfd46288a5086638d

# Diff at Mon, 10 Feb 2025 19:04:57 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@3756adff7c1ac86d8af3374a90a75c1999aae2b3 block: 21429035
- current block number: 21429035

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isUsingEigenDA:
+        false
    }
```

Generated with discovered.json: 0x0a1f5fbf29c8a87b29ce1a0a68588dce1174fcbd

# Diff at Tue, 04 Feb 2025 12:33:15 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@145553eed7ba44636411ecb25e4099728acd02f9 block: 21429035
- current block number: 21429035

## Description

Rename 'configure' permission to 'interact'

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF) {
    +++ description: None
      directlyReceivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract AddressManager (0x8173904703995c6BbA59a42B8bBf8405F978758a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.1.permission:
-        "configure"
+        "interact"
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

Generated with discovered.json: 0x6d26706cb5c192ac10bf1e3f691a9502a6f44e5a

# Diff at Mon, 20 Jan 2025 11:10:17 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 21429035
- current block number: 21429035

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.3.target:
-        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.3.via.1.delay:
-        0
      issuedPermissions.3.via.0.delay:
-        0
      issuedPermissions.3.to:
+        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.2.target:
-        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.2.via.1.delay:
-        0
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.1.target:
-        "0xe615dC682b340e00c2d80472a281CbD5A2b68ae7"
      issuedPermissions.1.to:
+        "0xe615dC682b340e00c2d80472a281CbD5A2b68ae7"
      issuedPermissions.0.target:
-        "0x79DdF0745D14783cDC2a05624c585Ddce07F4A02"
      issuedPermissions.0.to:
+        "0x79DdF0745D14783cDC2a05624c585Ddce07F4A02"
    }
```

```diff
    contract L1ERC721Bridge (0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions.1.target:
-        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.1.via.1.delay:
-        0
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.0.target:
-        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.via.1.delay:
-        0
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
    }
```

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions.2.target:
-        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.2.via.1.delay:
-        0
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.1.target:
-        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.1.via.1.delay:
-        0
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.target:
-        "0x87aab081Ac9F8ce80fb048f23280DF019036BA1d"
      issuedPermissions.0.to:
+        "0x87aab081Ac9F8ce80fb048f23280DF019036BA1d"
    }
```

```diff
    contract ProxyAdmin (0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF) {
    +++ description: None
      directlyReceivedPermissions.7.target:
-        "0xD1B30378CBF968E5525e8835219A5726A1e71D10"
      directlyReceivedPermissions.7.from:
+        "0xD1B30378CBF968E5525e8835219A5726A1e71D10"
      directlyReceivedPermissions.6.target:
-        "0xa641e14B685b5E652865e14A4fBc07e51371D124"
      directlyReceivedPermissions.6.from:
+        "0xa641e14B685b5E652865e14A4fBc07e51371D124"
      directlyReceivedPermissions.5.target:
-        "0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      directlyReceivedPermissions.5.from:
+        "0x7aC7e5989EaC278B7BbfeF560871a2026baD472c"
      directlyReceivedPermissions.4.target:
-        "0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
      directlyReceivedPermissions.4.from:
+        "0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A"
      directlyReceivedPermissions.3.target:
-        "0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
      directlyReceivedPermissions.3.from:
+        "0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12"
      directlyReceivedPermissions.2.target:
-        "0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
      directlyReceivedPermissions.2.from:
+        "0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378"
      directlyReceivedPermissions.1.target:
-        "0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
      directlyReceivedPermissions.1.from:
+        "0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e"
      directlyReceivedPermissions.0.target:
-        "0x8173904703995c6BbA59a42B8bBf8405F978758a"
      directlyReceivedPermissions.0.from:
+        "0x8173904703995c6BbA59a42B8bBf8405F978758a"
    }
```

```diff
    contract TBHMultisig (0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3) {
    +++ description: None
      directlyReceivedPermissions.0.target:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
      directlyReceivedPermissions.0.from:
+        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
    }
```

```diff
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.2.target:
-        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.2.via.1.delay:
-        0
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.1.target:
-        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.1.via.1.delay:
-        0
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.target:
-        "0x87aab081Ac9F8ce80fb048f23280DF019036BA1d"
      issuedPermissions.0.to:
+        "0x87aab081Ac9F8ce80fb048f23280DF019036BA1d"
    }
```

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.3.target:
-        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.3.via.1.delay:
-        0
      issuedPermissions.3.via.0.delay:
-        0
      issuedPermissions.3.to:
+        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.2.target:
-        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.2.via.1.delay:
-        0
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.1.target:
-        "0x68d5BBf3a01ECbB47CE38Cf64a7d6C0eA618040f"
      issuedPermissions.1.to:
+        "0x68d5BBf3a01ECbB47CE38Cf64a7d6C0eA618040f"
      issuedPermissions.0.target:
-        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.to:
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.description:
+        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
    }
```

```diff
    contract AddressManager (0x8173904703995c6BbA59a42B8bBf8405F978758a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.1.target:
-        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.1.via.1.delay:
-        0
      issuedPermissions.1.via.1.description:
-        "set and change address mappings."
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.1.description:
+        "set and change address mappings."
      issuedPermissions.0.target:
-        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.via.1.delay:
-        0
      issuedPermissions.0.via.1.description:
-        "set and change address mappings."
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.description:
+        "set and change address mappings."
    }
```

```diff
    contract OptimismMintableERC20Factory (0xa641e14B685b5E652865e14A4fBc07e51371D124) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions.1.target:
-        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.1.via.1.delay:
-        0
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.0.target:
-        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.via.1.delay:
-        0
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
    }
```

```diff
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      issuedPermissions.1.target:
-        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.1.via.1.delay:
-        0
      issuedPermissions.1.via.1.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      issuedPermissions.1.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
      issuedPermissions.0.target:
-        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.via.1.delay:
-        0
      issuedPermissions.0.via.1.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

Generated with discovered.json: 0x3d479b1da6e132565d857aff34d335d472aacc72

# Diff at Wed, 08 Jan 2025 09:08:13 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@deefa974378c2cd6b74f061e1f5a494bbbe1d63a block: 21429035
- current block number: 21429035

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21429035 (main branch discovery), not current.

```diff
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      description:
-        "The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."
+        "The main entry point to deposit ERC20 tokens from host chain to this chain."
    }
```

Generated with discovered.json: 0xac557798f3fb7a1c786f19c6bf75a3f053f8ccdf

# Diff at Wed, 18 Dec 2024 11:11:58 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@a44ef6747febdd9930ef05420e60556c20899f13 block: 20777124
- current block number: 21429035

## Description

Multiple upgrades back-and-forth (4 upgrades in the case of L2OutputOracle) to eventually the same implementations as before. Upgrade MS threshold decreased to 1/2 (EOA warn added).

## Watched changes

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.3:
+        {"permission":"upgrade","target":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3","delay":0},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}]}
      issuedPermissions.2.target:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.2.via.1:
+        {"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}
      issuedPermissions.2.via.0.address:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      issuedPermissions.1.target:
-        "0x2b6cD940ABE0CAF2fd89155b99522548c00EBaB1"
+        "0xe615dC682b340e00c2d80472a281CbD5A2b68ae7"
      values.$pastUpgrades.4:
+        ["2024-12-13T12:21:11.000Z","0x1c58ba302b76a7b5f7cc1c3124223f9ba4c62e072ccdd9623dcfd88330e92244",["0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"]]
      values.$pastUpgrades.3:
+        ["2024-12-13T12:17:35.000Z","0x76ec730181ff0f2f002c07941ca2433b9788f7773c948e295af6722beee9007e",["0x14E08A30B7Bb79c9777149f53e2dbBA58eBa1104"]]
      values.$pastUpgrades.2:
+        ["2024-12-13T12:12:35.000Z","0xbd013fcec97c6e28b2ddabcb76b600d3c28d4ba966a2b1de6d02088025a9947c",["0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"]]
      values.$pastUpgrades.1:
+        ["2024-12-13T12:04:35.000Z","0x9a9f680a935c2514123c19ab6f6a928ca46a102ec1129fa06850714aafe6ffa7",["0x14E08A30B7Bb79c9777149f53e2dbBA58eBa1104"]]
      values.$upgradeCount:
-        1
+        5
      values.proposer:
-        "0x2b6cD940ABE0CAF2fd89155b99522548c00EBaB1"
+        "0xe615dC682b340e00c2d80472a281CbD5A2b68ae7"
      values.PROPOSER:
-        "0x2b6cD940ABE0CAF2fd89155b99522548c00EBaB1"
+        "0xe615dC682b340e00c2d80472a281CbD5A2b68ae7"
    }
```

```diff
    contract L1ERC721Bridge (0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3","delay":0},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}]}
      issuedPermissions.0.target:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.via.1:
+        {"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}
      issuedPermissions.0.via.0.address:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
    }
```

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions.2:
+        {"permission":"upgrade","target":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3","delay":0},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}]}
      issuedPermissions.1.target:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.1.via.1:
+        {"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}
      issuedPermissions.1.via.0.address:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
    }
```

```diff
    contract TBHMultisig (0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3) {
    +++ description: None
      receivedPermissions:
-        [{"permission":"configure","target":"0x8173904703995c6BbA59a42B8bBf8405F978758a","description":"set and change address mappings.","via":[{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","target":"0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e","via":[{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","target":"0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378","via":[{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","target":"0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12","via":[{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","target":"0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A","via":[{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","target":"0x7aC7e5989EaC278B7BbfeF560871a2026baD472c","via":[{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","target":"0xa641e14B685b5E652865e14A4fBc07e51371D124","via":[{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]},{"permission":"upgrade","target":"0xD1B30378CBF968E5525e8835219A5726A1e71D10","description":"upgrading the bridge implementation can give access to all funds escrowed therein.","via":[{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"}]}]
      values.$members.1:
-        "0x25A6E7c6f3d0fE89A656Fcf065614B74E55099fF"
+        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
      values.$members.0:
-        "0xE559cf25AE191566d4A2E1cd5A533475179672A0"
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      values.$threshold:
-        2
+        1
      values.multisigThreshold:
-        "2 of 2 (100%)"
+        "1 of 2 (50%)"
    }
```

```diff
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.2:
+        {"permission":"upgrade","target":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3","delay":0},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}]}
      issuedPermissions.1.target:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.1.via.1:
+        {"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}
      issuedPermissions.1.via.0.address:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
    }
```

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.3:
+        {"permission":"upgrade","target":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3","delay":0},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}]}
      issuedPermissions.2.target:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.2.via.1:
+        {"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}
      issuedPermissions.2.via.0.address:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      issuedPermissions.1.target:
-        "0x7f9D9c1BCE1062E1077845eA39a0303429600a06"
+        "0x68d5BBf3a01ECbB47CE38Cf64a7d6C0eA618040f"
      issuedPermissions.0.target:
-        "0x25A6E7c6f3d0fE89A656Fcf065614B74E55099fF"
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      values.batcherHash:
-        "0x7f9D9c1BCE1062E1077845eA39a0303429600a06"
+        "0x68d5BBf3a01ECbB47CE38Cf64a7d6C0eA618040f"
      values.owner:
-        "0x25A6E7c6f3d0fE89A656Fcf065614B74E55099fF"
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      values.unsafeBlockSigner:
-        "0xDbad225D1C0DaBc27f6a9d250dBb136413C0DFb4"
+        "0x666bfb2Bac23cf5fE3308301A3c5130f92D96B07"
    }
```

```diff
    contract AddressManager (0x8173904703995c6BbA59a42B8bBf8405F978758a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.1:
+        {"permission":"configure","target":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3","delay":0},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0,"description":"set and change address mappings."}]}
      issuedPermissions.0.target:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.via.1:
+        {"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0,"description":"set and change address mappings."}
      issuedPermissions.0.via.0.address:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      issuedPermissions.0.via.0.description:
-        "set and change address mappings."
    }
```

```diff
    contract OptimismMintableERC20Factory (0xa641e14B685b5E652865e14A4fBc07e51371D124) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3","delay":0},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}]}
      issuedPermissions.0.target:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.via.1:
+        {"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}
      issuedPermissions.0.via.0.address:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
    }
```

```diff
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0xE559cf25AE191566d4A2E1cd5A533475179672A0","via":[{"address":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3","delay":0},{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0,"description":"upgrading the bridge implementation can give access to all funds escrowed therein."}]}
      issuedPermissions.0.target:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "0x666372fEfB85dA96a1a56667638321605afe95bC"
      issuedPermissions.0.via.1:
+        {"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0,"description":"upgrading the bridge implementation can give access to all funds escrowed therein."}
      issuedPermissions.0.via.0.address:
-        "0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF"
+        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
      issuedPermissions.0.via.0.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

Generated with discovered.json: 0x567de9e07b8ee1e0e4fb48301efab1be22e59ef8

# Diff at Fri, 01 Nov 2024 12:24:11 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@cd1f0e71bb08ce16b2084a11b768538e8aa6ba8c block: 20777124
- current block number: 20777124

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777124 (main branch discovery), not current.

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      description:
-        "This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
+        "This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
    }
```

```diff
    contract ProxyAdmin (0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF) {
    +++ description: None
      directlyReceivedPermissions.7.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract TBHMultisig (0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3) {
    +++ description: None
      receivedPermissions.7.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      issuedPermissions.0.via.0.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

Generated with discovered.json: 0xfc3c2a37a4e3451456414475344b50750bde4f70

# Diff at Tue, 29 Oct 2024 13:19:25 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@7b3fc9dc9074e1d423b48522c3f0273c86aab54a block: 20777124
- current block number: 20777124

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777124 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      fieldMeta:
+        {"FINALIZATION_PERIOD_SECONDS":{"description":"Challenge period (Number of seconds until a state root is finalized)."}}
    }
```

Generated with discovered.json: 0x62f4995ce5edb507ae8056a6e94f78b2233b3ae7

# Diff at Tue, 22 Oct 2024 13:50:54 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@c4e420ffba204be049626040a9ea287e023948f8 block: 20777124
- current block number: 20777124

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777124 (main branch discovery), not current.

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      template:
-        "opstack/SuperchainConfig"
+        "opstack/SuperchainConfigFake"
      description:
-        "Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
+        "This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
    }
```

Generated with discovered.json: 0x60f262d485a9df0c664f01fc59943722e770143b

# Diff at Mon, 21 Oct 2024 12:49:40 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e660599f23a07618fe949a07be1f516ce44f1914 block: 20777124
- current block number: 20777124

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777124 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      descriptions:
-        ["Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."]
      description:
+        "Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."
    }
```

```diff
    contract L1ERC721Bridge (0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      descriptions:
-        ["Used to bridge ERC-721 tokens from host chain to this chain."]
      description:
+        "Used to bridge ERC-721 tokens from host chain to this chain."
    }
```

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      descriptions:
-        ["Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."]
      description:
+        "Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
    }
```

```diff
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      descriptions:
-        ["The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."]
      description:
+        "The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."
    }
```

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      descriptions:
-        ["Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."]
      description:
+        "Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."
    }
```

```diff
    contract L1CrossDomainMessenger (0x807d21e416434ae92c8E5bcA4d506781aFbBa380) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      descriptions:
-        ["Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."]
      description:
+        "Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."
    }
```

```diff
    contract AddressManager (0x8173904703995c6BbA59a42B8bBf8405F978758a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      descriptions:
-        ["Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."]
      description:
+        "Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."
    }
```

```diff
    contract OptimismMintableERC20Factory (0xa641e14B685b5E652865e14A4fBc07e51371D124) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      descriptions:
-        ["A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."]
      description:
+        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."
    }
```

```diff
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      descriptions:
-        ["The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."]
      description:
+        "The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."
    }
```

Generated with discovered.json: 0x88d4670a516227cae923c8a36c489a11819d3516

# Diff at Mon, 21 Oct 2024 11:11:28 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8895d33866f5665c4c710f4ddaa32bfa63cc3c78 block: 20777124
- current block number: 20777124

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777124 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      values.$pastUpgrades.0.2:
+        ["0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"]
      values.$pastUpgrades.0.1:
-        ["0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"]
+        "0xb5ac763936b2295e23b585a3d6dcaf820ebeb7ea7a77f22d1c637e6144b33466"
    }
```

```diff
    contract L1ERC721Bridge (0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      values.$pastUpgrades.0.2:
+        ["0xfb5bE2d53F1429897c485C109A2A4Ae062C2A2ce"]
      values.$pastUpgrades.0.1:
-        ["0xfb5bE2d53F1429897c485C109A2A4Ae062C2A2ce"]
+        "0x6716df4e258d5e2f03e7ed08ad6462bf27bdc6ef68029f4f6f377f1389ec342a"
    }
```

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      values.$pastUpgrades.0.2:
+        ["0x0F4D0486B8628Fb6351EE3E63a95e104dDB2FB0F"]
      values.$pastUpgrades.0.1:
-        ["0x0F4D0486B8628Fb6351EE3E63a95e104dDB2FB0F"]
+        "0xf063857a0c7b1f2efc289b9d1d93f9e67cb3ce2e78e853629dc662c467d2e55c"
    }
```

```diff
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      values.$pastUpgrades.0.2:
+        ["0x1554F55Bd54DAC8e8164C33ce156F13e9c0d1B46"]
      values.$pastUpgrades.0.1:
-        ["0x1554F55Bd54DAC8e8164C33ce156F13e9c0d1B46"]
+        "0x9e7cc379cee812fe05332fe4eaded9e377fe2531883ab076e1fa8f852d59dd85"
    }
```

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.$pastUpgrades.0.2:
+        ["0xB7a1e72da74DF4CB498Ded5c45653374A6CC7097"]
      values.$pastUpgrades.0.1:
-        ["0xB7a1e72da74DF4CB498Ded5c45653374A6CC7097"]
+        "0x70785a6ba14d5e485457b56d171368a85da169eb515def0fa300b597ee4378c3"
    }
```

```diff
    contract L1CrossDomainMessenger (0x807d21e416434ae92c8E5bcA4d506781aFbBa380) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$pastUpgrades.0.2:
+        ["0x48455CB9bB2407C3e8De538B884bBec5aCbaa137"]
      values.$pastUpgrades.0.1:
-        ["0x48455CB9bB2407C3e8De538B884bBec5aCbaa137"]
+        "0x8417696d2c0870b762581931c5af6f511e8f54da1621a6501ed5b9d021f074d0"
    }
```

```diff
    contract OptimismMintableERC20Factory (0xa641e14B685b5E652865e14A4fBc07e51371D124) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      values.$pastUpgrades.0.2:
+        ["0x343CC6af2CD31aF51655AE75D19D51ec49a89b7A"]
      values.$pastUpgrades.0.1:
-        ["0x343CC6af2CD31aF51655AE75D19D51ec49a89b7A"]
+        "0x2c283752247bcf5f1b5e85fafe5a36b7951400c9a5d3147efe8a7b2c77c345a7"
    }
```

Generated with discovered.json: 0xb5704ef02192ebc58582bd2870411bc9eb40e5b2

# Diff at Wed, 16 Oct 2024 11:41:41 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@a3d139b799cc0b28e5e912febb17464d4e5aef5d block: 20777124
- current block number: 20777124

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777124 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.2:
+        {"permission":"upgrade","target":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3","via":[{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}]}
      issuedPermissions.1:
+        {"permission":"propose","target":"0x2b6cD940ABE0CAF2fd89155b99522548c00EBaB1","via":[]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "challenge"
      issuedPermissions.0.target:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "0x79DdF0745D14783cDC2a05624c585Ddce07F4A02"
      issuedPermissions.0.via.0:
-        {"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}
    }
```

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3","via":[{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "guard"
      issuedPermissions.0.target:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "0x87aab081Ac9F8ce80fb048f23280DF019036BA1d"
      issuedPermissions.0.via.0:
-        {"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}
    }
```

```diff
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3","via":[{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "guard"
      issuedPermissions.0.target:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "0x87aab081Ac9F8ce80fb048f23280DF019036BA1d"
      issuedPermissions.0.via.0:
-        {"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}
    }
```

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.2:
+        {"permission":"upgrade","target":"0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3","via":[{"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}]}
      issuedPermissions.1.permission:
-        "upgrade"
+        "sequence"
      issuedPermissions.1.target:
-        "0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3"
+        "0x7f9D9c1BCE1062E1077845eA39a0303429600a06"
      issuedPermissions.1.via.0:
-        {"address":"0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF","delay":0}
    }
```

Generated with discovered.json: 0x2e7b093892dbc4b64f22b8f9d42ff8c13c68e759

# Diff at Mon, 14 Oct 2024 10:56:55 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1afc77ff111ceb0970e7d09efcc7b2f376b0c281 block: 20777124
- current block number: 20777124

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777124 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0x025c187b0231be4785898f25f98d749f953f5d06781772aef242812e2ecf52e3"]
    }
```

```diff
    contract L1ERC721Bridge (0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0x56b8df1d0d704ad119f31879a8c1446528dbdc9130c3442ae76a2991ca1df17a"]
    }
```

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0x3ac96c9c95e25f689f65a50f24b325e3f891029cb1cea96dc642418bbb535b1d"]
    }
```

```diff
    contract ProxyAdmin (0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF) {
    +++ description: None
      template:
-        "opstack/ProxyAdmin"
+        "global/ProxyAdmin"
      sourceHashes:
+        ["0x96d2f0fa1bd83ebd61ba6a2351c64c7fda7aa580b11ea67bb6bf4338e5c28512"]
    }
```

```diff
    contract TBHMultisig (0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3) {
    +++ description: None
      sourceHashes:
+        ["0x81a7349eebb98ac33b0bc6842e3cb258034a8f2a4ba004570bb8e2e25947f9ff","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

```diff
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0x025eaa1cbd7fa48ee7b33fc45374ef90b0676ec3a15bd7224a4cb394cc343b7d"]
    }
```

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0x8594410431f0c8cc86d641b9954c3ad91e81fecc79f25ec8d62b294c44201533"]
    }
```

```diff
    contract L1CrossDomainMessenger (0x807d21e416434ae92c8E5bcA4d506781aFbBa380) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      sourceHashes:
+        ["0x20a2eb4d3677fc8a15e944f7b1843acd01b2e92acdc4c7a7f7a35b07b891149b","0x4d4c8988a076d9b4f8e7056a3223ce908cacc5888a54ae3940f1c8d7b7aae742"]
    }
```

```diff
    contract AddressManager (0x8173904703995c6BbA59a42B8bBf8405F978758a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      sourceHashes:
+        ["0xdc86a850f11dc2b5c0472a05d0e3c14f239baf2c3b1ab19631591b0827985380"]
    }
```

```diff
    contract OptimismMintableERC20Factory (0xa641e14B685b5E652865e14A4fBc07e51371D124) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0x4c5ac4e53576924cabbd2a471f368a541bc3f4b1f53fa41a389692fcc62f6176"]
    }
```

```diff
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      sourceHashes:
+        ["0xbfb58685ff2f2f07eaa01a3c4e3c33c97686bfd3ae7c50c49f9da6ef5098cb31","0xe3ebd11527e7e2cc700c4894d46405fa80fdd55e1f6074a122818a25141db5f2"]
    }
```

Generated with discovered.json: 0xb289324db913b645ce267e5ed730cb2ff0d60d36

# Diff at Wed, 09 Oct 2024 13:10:55 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@37683e2b3d0587372f886eef49e921277810c8bf block: 20777124
- current block number: 20777124

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777124 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF) {
    +++ description: None
      directlyReceivedPermissions.0.description:
+        "set and change address mappings."
    }
```

```diff
    contract TBHMultisig (0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3) {
    +++ description: None
      receivedPermissions.0.description:
+        "set and change address mappings."
    }
```

```diff
    contract AddressManager (0x8173904703995c6BbA59a42B8bBf8405F978758a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.via.0.description:
+        "set and change address mappings."
      descriptions:
+        ["Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."]
    }
```

Generated with discovered.json: 0xfe2f5b39beb6b55c3e6c262c2c9960d9470f0bee

# Diff at Tue, 01 Oct 2024 11:11:26 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bd754dc73c66120164006054f8d25c5fae9cd910 block: 20777124
- current block number: 20777124

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777124 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      values.$pastUpgrades:
+        [["2024-06-26T10:49:47.000Z",["0xF8BE077b85C8553124918d4ECE132E0Fb634c86A"]]]
    }
```

```diff
    contract L1ERC721Bridge (0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      values.$pastUpgrades:
+        [["2024-06-26T10:48:23.000Z",["0xfb5bE2d53F1429897c485C109A2A4Ae062C2A2ce"]]]
    }
```

```diff
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      values.$pastUpgrades:
+        [["2024-06-26T10:41:47.000Z",["0x0F4D0486B8628Fb6351EE3E63a95e104dDB2FB0F"]]]
    }
```

```diff
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      values.$pastUpgrades:
+        [["2024-06-26T10:47:35.000Z",["0x1554F55Bd54DAC8e8164C33ce156F13e9c0d1B46"]]]
    }
```

```diff
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.$pastUpgrades:
+        [["2024-06-26T10:47:47.000Z",["0xB7a1e72da74DF4CB498Ded5c45653374A6CC7097"]]]
    }
```

```diff
    contract L1CrossDomainMessenger (0x807d21e416434ae92c8E5bcA4d506781aFbBa380) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$pastUpgrades:
+        [["2024-06-26T10:49:23.000Z",["0x48455CB9bB2407C3e8De538B884bBec5aCbaa137"]]]
      values.$upgradeCount:
+        1
    }
```

```diff
    contract OptimismMintableERC20Factory (0xa641e14B685b5E652865e14A4fBc07e51371D124) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      values.$pastUpgrades:
+        [["2024-06-26T10:48:47.000Z",["0x343CC6af2CD31aF51655AE75D19D51ec49a89b7A"]]]
    }
```

```diff
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      values.$pastUpgrades:
+        []
    }
```

Generated with discovered.json: 0xb811399244fc3368f440ad84ecf3d16859b4723b

# Diff at Fri, 20 Sep 2024 14:14:32 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@c1f8c9b7beabeba1a847fb9e1064a356593cfe16 block: 20777124
- current block number: 20777124

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777124 (main branch discovery), not current.

```diff
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      values.balance:
-        "201500019999999990000"
    }
```

Generated with discovered.json: 0x05f3ebb5712b0e093b826ca60272e24451766c70

# Diff at Wed, 18 Sep 2024 11:17:11 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- current block number: 20777124

## Description

Initial discovery.

## Initial discovery

```diff
+   Status: CREATED
    contract L2OutputOracle (0x012f4baa6e0F5Ac4dFDF47BDdd9CF68a2B17821e)
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0x1b396e4dC6ECB0be33CF01C5a34E1a3a7D03c378)
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract SuperchainConfig (0x34bb53D7C525114A27F0FE2aF91bdDAd186abb12)
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x38593Cce8FaB9887Ef9760f5F6aB3d6C595143cF)
    +++ description: None
```

```diff
+   Status: CREATED
    contract TBHMultisig (0x48EC051349dDc7E8baBafCBfe27696ECF2A8a8B3)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismPortal (0x5ff88fcF8e9947f45F4cAf8FFd5231B5DdF05e0A)
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
```

```diff
+   Status: CREATED
    contract SystemConfig (0x7aC7e5989EaC278B7BbfeF560871a2026baD472c)
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x807d21e416434ae92c8E5bcA4d506781aFbBa380)
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
```

```diff
+   Status: CREATED
    contract AddressManager (0x8173904703995c6BbA59a42B8bBf8405F978758a)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0xa641e14B685b5E652865e14A4fBc07e51371D124)
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0xD1B30378CBF968E5525e8835219A5726A1e71D10)
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
```
