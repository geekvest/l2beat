Generated with discovered.json: 0xc613797ad5ee3f08bf2d8939ea1650c515c22bf2

# Diff at Mon, 14 Jul 2025 12:46:43 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9f4300dad2f3d080cd56fa311d4a848556c74e72 block: 22297620
- current block number: 22297620

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22297620 (main branch discovery), not current.

```diff
    EOA  (0x000000000000000000000000000000000000dEaD) {
    +++ description: None
      address:
-        "0x000000000000000000000000000000000000dEaD"
+        "eth:0x000000000000000000000000000000000000dEaD"
    }
```

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: The DataAvailabilityChallenge contract is used to challenge the full availability of data behind commimted transaction data hashes. See the technology section for more details.
      address:
-        "0x16193e14197c10109F3e81b938153A04A2a00190"
+        "eth:0x16193e14197c10109F3e81b938153A04A2a00190"
      values.$admin:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      values.$implementation:
-        "0x36b9F31874b8790d4caf341168A95FE165bA3C91"
+        "eth:0x36b9F31874b8790d4caf341168A95FE165bA3C91"
      values.$pastUpgrades.0.2.0:
-        "0x36b9F31874b8790d4caf341168A95FE165bA3C91"
+        "eth:0x36b9F31874b8790d4caf341168A95FE165bA3C91"
      values.owner:
-        "0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf"
+        "eth:0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf"
      implementationNames.0x16193e14197c10109F3e81b938153A04A2a00190:
-        "Proxy"
      implementationNames.0x36b9F31874b8790d4caf341168A95FE165bA3C91:
-        "DataAvailabilityChallenge"
      implementationNames.eth:0x16193e14197c10109F3e81b938153A04A2a00190:
+        "Proxy"
      implementationNames.eth:0x36b9F31874b8790d4caf341168A95FE165bA3C91:
+        "DataAvailabilityChallenge"
    }
```

```diff
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      address:
-        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
+        "eth:0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      values.$admin:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      values.$implementation:
-        "0x53699fbA16599c1425D2637B839bA59c121a2e6a"
+        "eth:0x53699fbA16599c1425D2637B839bA59c121a2e6a"
      values.$pastUpgrades.0.2.0:
-        "0x53699fbA16599c1425D2637B839bA59c121a2e6a"
+        "eth:0x53699fbA16599c1425D2637B839bA59c121a2e6a"
      values.messenger:
-        "0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
+        "eth:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
      values.MESSENGER:
-        "0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
+        "eth:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
      values.OTHER_BRIDGE:
-        "0x4200000000000000000000000000000000000014"
+        "eth:0x4200000000000000000000000000000000000014"
      values.otherBridge:
-        "0x4200000000000000000000000000000000000014"
+        "eth:0x4200000000000000000000000000000000000014"
      values.superchainConfig:
-        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
+        "eth:0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      implementationNames.0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b:
-        "Proxy"
      implementationNames.0x53699fbA16599c1425D2637B839bA59c121a2e6a:
-        "L1ERC721Bridge"
      implementationNames.eth:0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b:
+        "Proxy"
      implementationNames.eth:0x53699fbA16599c1425D2637B839bA59c121a2e6a:
+        "L1ERC721Bridge"
    }
```

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      address:
-        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
+        "eth:0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      values.$admin:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      values.$implementation:
-        "0xC2AbCf1dDADA750936a168334fD14D66fCa931e0"
+        "eth:0xC2AbCf1dDADA750936a168334fD14D66fCa931e0"
      values.l2TokenBridge:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      values.messenger:
-        "0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
+        "eth:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
      values.MESSENGER:
-        "0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
+        "eth:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
      values.OTHER_BRIDGE:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      values.otherBridge:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      values.superchainConfig:
-        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
+        "eth:0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      implementationNames.0x2AD84AbD52050956AcC9c490D024b821A59e3FB6:
-        "L1ChugSplashProxy"
      implementationNames.0xC2AbCf1dDADA750936a168334fD14D66fCa931e0:
-        "L1StandardBridge"
      implementationNames.eth:0x2AD84AbD52050956AcC9c490D024b821A59e3FB6:
+        "L1ChugSplashProxy"
      implementationNames.eth:0xC2AbCf1dDADA750936a168334fD14D66fCa931e0:
+        "L1StandardBridge"
    }
```

```diff
    EOA  (0x39857a92E26648438d9c7dDDa1Ee3e481dea54B3) {
    +++ description: None
      address:
-        "0x39857a92E26648438d9c7dDDa1Ee3e481dea54B3"
+        "eth:0x39857a92E26648438d9c7dDDa1Ee3e481dea54B3"
    }
```

```diff
    EOA  (0x43281470Ee1Be772f7BE833CA2B34a126CE064F7) {
    +++ description: None
      address:
-        "0x43281470Ee1Be772f7BE833CA2B34a126CE064F7"
+        "eth:0x43281470Ee1Be772f7BE833CA2B34a126CE064F7"
    }
```

```diff
    EOA  (0x4B81691a8ac1aaA8988c7DD19CD7e7e8F40A6946) {
    +++ description: None
      address:
-        "0x4B81691a8ac1aaA8988c7DD19CD7e7e8F40A6946"
+        "eth:0x4B81691a8ac1aaA8988c7DD19CD7e7e8F40A6946"
    }
```

```diff
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa.
      address:
-        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
+        "eth:0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      values.$admin:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      values.$implementation:
-        "0x78Bd7b48E74669Dd6709C111200c6B862505Fc4A"
+        "eth:0x78Bd7b48E74669Dd6709C111200c6B862505Fc4A"
      values.$pastUpgrades.0.2.0:
-        "0x78Bd7b48E74669Dd6709C111200c6B862505Fc4A"
+        "eth:0x78Bd7b48E74669Dd6709C111200c6B862505Fc4A"
      values.bridge:
-        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
+        "eth:0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      values.BRIDGE:
-        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
+        "eth:0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      implementationNames.0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f:
-        "Proxy"
      implementationNames.0x78Bd7b48E74669Dd6709C111200c6B862505Fc4A:
-        "OptimismMintableERC20Factory"
      implementationNames.eth:0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f:
+        "Proxy"
      implementationNames.eth:0x78Bd7b48E74669Dd6709C111200c6B862505Fc4A:
+        "OptimismMintableERC20Factory"
    }
```

```diff
    EOA  (0x553C459B283ECc87638e047123eF50B2D297bc4a) {
    +++ description: None
      address:
-        "0x553C459B283ECc87638e047123eF50B2D297bc4a"
+        "eth:0x553C459B283ECc87638e047123eF50B2D297bc4a"
    }
```

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      address:
-        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "eth:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      values.$admin:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      values.$implementation:
-        "0x48Ef83Cf812f291EDB00C2D48440Ee90cD12be1a"
+        "eth:0x48Ef83Cf812f291EDB00C2D48440Ee90cD12be1a"
      values.$pastUpgrades.0.2.0:
-        "0x48Ef83Cf812f291EDB00C2D48440Ee90cD12be1a"
+        "eth:0x48Ef83Cf812f291EDB00C2D48440Ee90cD12be1a"
      values.$pastUpgrades.1.2.0:
-        "0xA9D78F579f1B30194F3c2Ca1987A9B91A33BDF08"
+        "eth:0xA9D78F579f1B30194F3c2Ca1987A9B91A33BDF08"
      values.$pastUpgrades.2.2.0:
-        "0x48Ef83Cf812f291EDB00C2D48440Ee90cD12be1a"
+        "eth:0x48Ef83Cf812f291EDB00C2D48440Ee90cD12be1a"
+++ severity: HIGH
      values.challenger:
-        "0x8b3B4F6C348f6baC39190B89c801E61E41F05b88"
+        "eth:0x8b3B4F6C348f6baC39190B89c801E61E41F05b88"
      values.CHALLENGER:
-        "0x8b3B4F6C348f6baC39190B89c801E61E41F05b88"
+        "eth:0x8b3B4F6C348f6baC39190B89c801E61E41F05b88"
+++ severity: HIGH
      values.proposer:
-        "0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D"
+        "eth:0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D"
      values.PROPOSER:
-        "0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D"
+        "eth:0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D"
      implementationNames.0x5A0492D20D984eE904E46E6Ff24572bc755abb28:
-        "Proxy"
      implementationNames.0x48Ef83Cf812f291EDB00C2D48440Ee90cD12be1a:
-        "L2OutputOracle"
      implementationNames.eth:0x5A0492D20D984eE904E46E6Ff24572bc755abb28:
+        "Proxy"
      implementationNames.eth:0x48Ef83Cf812f291EDB00C2D48440Ee90cD12be1a:
+        "L2OutputOracle"
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      address:
-        "0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
+        "eth:0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
      values.$admin:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      values.$implementation:
-        "0x42557f7920a257C7be82C2dfafcEd7aC1CCDb43F"
+        "eth:0x42557f7920a257C7be82C2dfafcEd7aC1CCDb43F"
      values.$pastUpgrades.0.2.0:
-        "0x42557f7920a257C7be82C2dfafcEd7aC1CCDb43F"
+        "eth:0x42557f7920a257C7be82C2dfafcEd7aC1CCDb43F"
      values.batcherHash:
-        "0x39857a92E26648438d9c7dDDa1Ee3e481dea54B3"
+        "eth:0x39857a92E26648438d9c7dDDa1Ee3e481dea54B3"
      values.batchInbox:
-        "0xfF00000000000000000000000000000000293b30"
+        "eth:0xfF00000000000000000000000000000000293b30"
      values.l1CrossDomainMessenger:
-        "0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
+        "eth:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
      values.l1ERC721Bridge:
-        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
+        "eth:0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      values.l1StandardBridge:
-        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
+        "eth:0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      values.l2OutputOracle:
-        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "eth:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      values.optimismMintableERC20Factory:
-        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
+        "eth:0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      values.optimismPortal:
-        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
+        "eth:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      values.owner:
-        "0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf"
+        "eth:0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf"
      values.sequencerInbox:
-        "0xfF00000000000000000000000000000000293b30"
+        "eth:0xfF00000000000000000000000000000000293b30"
      values.unsafeBlockSigner:
-        "0x7a4e92aD7E40C8df264eD18010847e6C27AB3d82"
+        "eth:0x7a4e92aD7E40C8df264eD18010847e6C27AB3d82"
      implementationNames.0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C:
-        "Proxy"
      implementationNames.0x42557f7920a257C7be82C2dfafcEd7aC1CCDb43F:
-        "SystemConfig"
      implementationNames.eth:0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C:
+        "Proxy"
      implementationNames.eth:0x42557f7920a257C7be82C2dfafcEd7aC1CCDb43F:
+        "SystemConfig"
    }
```

```diff
    contract L1CrossDomainMessenger (0x702dF90E92A6841c9013faE6D724ddFA8F141d5C) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      address:
-        "0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
+        "eth:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
      values.$admin:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      values.$implementation:
-        "0x5eAAeabB78C28EF184Bb0cF9B0af6D2DA232679a"
+        "eth:0x5eAAeabB78C28EF184Bb0cF9B0af6D2DA232679a"
      values.$pastUpgrades.0.2.0:
-        "0x5eAAeabB78C28EF184Bb0cF9B0af6D2DA232679a"
+        "eth:0x5eAAeabB78C28EF184Bb0cF9B0af6D2DA232679a"
      values.OTHER_MESSENGER:
-        "0x4200000000000000000000000000000000000007"
+        "eth:0x4200000000000000000000000000000000000007"
      values.otherMessenger:
-        "0x4200000000000000000000000000000000000007"
+        "eth:0x4200000000000000000000000000000000000007"
      values.portal:
-        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
+        "eth:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      values.PORTAL:
-        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
+        "eth:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      values.ResolvedDelegateProxy_addressManager:
-        "0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
+        "eth:0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
      values.superchainConfig:
-        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
+        "eth:0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      implementationNames.0x702dF90E92A6841c9013faE6D724ddFA8F141d5C:
-        "ResolvedDelegateProxy"
      implementationNames.0x5eAAeabB78C28EF184Bb0cF9B0af6D2DA232679a:
-        "L1CrossDomainMessenger"
      implementationNames.eth:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C:
+        "ResolvedDelegateProxy"
      implementationNames.eth:0x5eAAeabB78C28EF184Bb0cF9B0af6D2DA232679a:
+        "L1CrossDomainMessenger"
    }
```

```diff
    EOA  (0x7a4e92aD7E40C8df264eD18010847e6C27AB3d82) {
    +++ description: None
      address:
-        "0x7a4e92aD7E40C8df264eD18010847e6C27AB3d82"
+        "eth:0x7a4e92aD7E40C8df264eD18010847e6C27AB3d82"
    }
```

```diff
    EOA  (0x8b3B4F6C348f6baC39190B89c801E61E41F05b88) {
    +++ description: None
      address:
-        "0x8b3B4F6C348f6baC39190B89c801E61E41F05b88"
+        "eth:0x8b3B4F6C348f6baC39190B89c801E61E41F05b88"
    }
```

```diff
    EOA Xterio (0x8B6341E18B2DC644cA94eD85173691873626fc7F) {
    +++ description: None
      address:
-        "0x8B6341E18B2DC644cA94eD85173691873626fc7F"
+        "eth:0x8B6341E18B2DC644cA94eD85173691873626fc7F"
    }
```

```diff
    contract Safe (0x8f33C32503B860eDd31BeC1c80669aFee40901f3) {
    +++ description: None
      address:
-        "0x8f33C32503B860eDd31BeC1c80669aFee40901f3"
+        "eth:0x8f33C32503B860eDd31BeC1c80669aFee40901f3"
      values.$implementation:
-        "0x41675C099F32341bf84BFc5382aF534df5C7461a"
+        "eth:0x41675C099F32341bf84BFc5382aF534df5C7461a"
      values.$members.0:
-        "0x553C459B283ECc87638e047123eF50B2D297bc4a"
+        "eth:0x553C459B283ECc87638e047123eF50B2D297bc4a"
      values.$members.1:
-        "0xebd49F36Fe79b3c894FCfaed1A2024C6455887a3"
+        "eth:0xebd49F36Fe79b3c894FCfaed1A2024C6455887a3"
      values.$members.2:
-        "0x43281470Ee1Be772f7BE833CA2B34a126CE064F7"
+        "eth:0x43281470Ee1Be772f7BE833CA2B34a126CE064F7"
      values.$members.3:
-        "0x4B81691a8ac1aaA8988c7DD19CD7e7e8F40A6946"
+        "eth:0x4B81691a8ac1aaA8988c7DD19CD7e7e8F40A6946"
      implementationNames.0x8f33C32503B860eDd31BeC1c80669aFee40901f3:
-        "SafeProxy"
      implementationNames.0x41675C099F32341bf84BFc5382aF534df5C7461a:
-        "Safe"
      implementationNames.eth:0x8f33C32503B860eDd31BeC1c80669aFee40901f3:
+        "SafeProxy"
      implementationNames.eth:0x41675C099F32341bf84BFc5382aF534df5C7461a:
+        "Safe"
    }
```

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: None
      address:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      values.addressManager:
-        "0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
+        "eth:0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
      values.owner:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
+        "eth:0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      implementationNames.0x9e48d6bBca781c23392Ec459BfB3657C40a794A8:
-        "ProxyAdmin"
      implementationNames.eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8:
+        "ProxyAdmin"
    }
```

```diff
    EOA AltLayer 3 (0xa8AC7D03BEb92Fa3E6030AEB21629D00Ffb66dD7) {
    +++ description: None
      address:
-        "0xa8AC7D03BEb92Fa3E6030AEB21629D00Ffb66dD7"
+        "eth:0xa8AC7D03BEb92Fa3E6030AEB21629D00Ffb66dD7"
    }
```

```diff
    EOA AltLayer 1 (0xaC79765A73eB9dcBd3c427181E6819902AE25b48) {
    +++ description: None
      address:
-        "0xaC79765A73eB9dcBd3c427181E6819902AE25b48"
+        "eth:0xaC79765A73eB9dcBd3c427181E6819902AE25b48"
    }
```

```diff
    EOA AltLayer 2 (0xB5b01E638CEF6AE50462A487d70005D6fe85eCf2) {
    +++ description: None
      address:
-        "0xB5b01E638CEF6AE50462A487d70005D6fe85eCf2"
+        "eth:0xB5b01E638CEF6AE50462A487d70005D6fe85eCf2"
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals. Forced transactions from Layer 1 are disabled.
      address:
-        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
+        "eth:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      values.$admin:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      values.$implementation:
-        "0xEdE953bab7C50B2e5150316Ae0574F0cbA4068a9"
+        "eth:0xEdE953bab7C50B2e5150316Ae0574F0cbA4068a9"
      values.$pastUpgrades.0.2.0:
-        "0xb6a5DCc244EfAbE3194cf5e5590a463f44eD5784"
+        "eth:0xb6a5DCc244EfAbE3194cf5e5590a463f44eD5784"
      values.$pastUpgrades.1.2.0:
-        "0xEdE953bab7C50B2e5150316Ae0574F0cbA4068a9"
+        "eth:0xEdE953bab7C50B2e5150316Ae0574F0cbA4068a9"
      values.guardian:
-        "0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
+        "eth:0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
      values.GUARDIAN:
-        "0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
+        "eth:0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
      values.L2_ORACLE:
-        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "eth:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      values.l2Oracle:
-        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "eth:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      values.l2Sender:
-        "0x000000000000000000000000000000000000dEaD"
+        "eth:0x000000000000000000000000000000000000dEaD"
      values.privilegedAddress:
-        "0x8f33C32503B860eDd31BeC1c80669aFee40901f3"
+        "eth:0x8f33C32503B860eDd31BeC1c80669aFee40901f3"
      values.superchainConfig:
-        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
+        "eth:0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      values.SYSTEM_CONFIG:
-        "0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
+        "eth:0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
      values.systemConfig:
-        "0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
+        "eth:0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
      implementationNames.0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A:
-        "Proxy"
      implementationNames.0xEdE953bab7C50B2e5150316Ae0574F0cbA4068a9:
-        "OptimismPortal"
      implementationNames.eth:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A:
+        "Proxy"
      implementationNames.eth:0xEdE953bab7C50B2e5150316Ae0574F0cbA4068a9:
+        "OptimismPortal"
    }
```

```diff
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      address:
-        "0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
+        "eth:0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
      values.owner:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      implementationNames.0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a:
-        "AddressManager"
      implementationNames.eth:0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a:
+        "AddressManager"
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      address:
-        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
+        "eth:0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      values.$admin:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      values.$implementation:
-        "0x17bcBF2A2CF8156cf4603f8aFAAB27Ec4e998888"
+        "eth:0x17bcBF2A2CF8156cf4603f8aFAAB27Ec4e998888"
      values.$pastUpgrades.0.2.0:
-        "0x17bcBF2A2CF8156cf4603f8aFAAB27Ec4e998888"
+        "eth:0x17bcBF2A2CF8156cf4603f8aFAAB27Ec4e998888"
      values.guardian:
-        "0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
+        "eth:0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
      implementationNames.0xcbF423525a5471Fc5037a5397F99f6F09fe41379:
-        "Proxy"
      implementationNames.0x17bcBF2A2CF8156cf4603f8aFAAB27Ec4e998888:
-        "SuperchainConfig"
      implementationNames.eth:0xcbF423525a5471Fc5037a5397F99f6F09fe41379:
+        "Proxy"
      implementationNames.eth:0x17bcBF2A2CF8156cf4603f8aFAAB27Ec4e998888:
+        "SuperchainConfig"
    }
```

```diff
    EOA  (0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf) {
    +++ description: None
      address:
-        "0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf"
+        "eth:0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf"
    }
```

```diff
    EOA  (0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787) {
    +++ description: None
      address:
-        "0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
+        "eth:0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
    }
```

```diff
    EOA  (0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D) {
    +++ description: None
      address:
-        "0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D"
+        "eth:0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D"
    }
```

```diff
    EOA  (0xebd49F36Fe79b3c894FCfaed1A2024C6455887a3) {
    +++ description: None
      address:
-        "0xebd49F36Fe79b3c894FCfaed1A2024C6455887a3"
+        "eth:0xebd49F36Fe79b3c894FCfaed1A2024C6455887a3"
    }
```

```diff
    EOA  (0xfF00000000000000000000000000000000293b30) {
    +++ description: None
      address:
-        "0xfF00000000000000000000000000000000293b30"
+        "eth:0xfF00000000000000000000000000000000293b30"
    }
```

```diff
    contract Xterio Multisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      address:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
+        "eth:0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0xaC79765A73eB9dcBd3c427181E6819902AE25b48"
+        "eth:0xaC79765A73eB9dcBd3c427181E6819902AE25b48"
      values.$members.1:
-        "0xB5b01E638CEF6AE50462A487d70005D6fe85eCf2"
+        "eth:0xB5b01E638CEF6AE50462A487d70005D6fe85eCf2"
      values.$members.2:
-        "0xa8AC7D03BEb92Fa3E6030AEB21629D00Ffb66dD7"
+        "eth:0xa8AC7D03BEb92Fa3E6030AEB21629D00Ffb66dD7"
      values.$members.3:
-        "0x8B6341E18B2DC644cA94eD85173691873626fc7F"
+        "eth:0x8B6341E18B2DC644cA94eD85173691873626fc7F"
      implementationNames.0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
+   Status: CREATED
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190)
    +++ description: The DataAvailabilityChallenge contract is used to challenge the full availability of data behind commimted transaction data hashes. See the technology section for more details.
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b)
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6)
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f)
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa.
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28)
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
```

```diff
+   Status: CREATED
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C)
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x702dF90E92A6841c9013faE6D724ddFA8F141d5C)
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
```

```diff
+   Status: CREATED
    contract Safe (0x8f33C32503B860eDd31BeC1c80669aFee40901f3)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A)
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals. Forced transactions from Layer 1 are disabled.
```

```diff
+   Status: CREATED
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a)
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
```

```diff
+   Status: CREATED
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379)
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
```

```diff
+   Status: CREATED
    contract Xterio Multisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574)
    +++ description: None
```

Generated with discovered.json: 0x76d7d9d95030368a9a6e315d411866a47d175790

# Diff at Mon, 14 Jul 2025 08:02:47 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@0dc82cd5064c9c6dc9fb20e2291a8bb6b2048e27 block: 22297620
- current block number: 22297620

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22297620 (main branch discovery), not current.

```diff
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa.
      description:
-        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."
+        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa."
    }
```

Generated with discovered.json: 0x95ac4882e0234de888a9d5138b4b6af29a146e6d

# Diff at Fri, 04 Jul 2025 12:19:28 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f56dc47fe915564d4555300304da4d3bcbc087f block: 22297620
- current block number: 22297620

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22297620 (main branch discovery), not current.

```diff
    EOA  (0x39857a92E26648438d9c7dDDa1Ee3e481dea54B3) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
+        "eth:0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
    }
```

```diff
    EOA  (0x8b3B4F6C348f6baC39190B89c801E61E41F05b88) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "eth:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      receivedPermissions.1.from:
-        "ethereum:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "eth:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
    }
```

```diff
    contract Safe (0x8f33C32503B860eDd31BeC1c80669aFee40901f3) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
+        "eth:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
    }
```

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: None
      directlyReceivedPermissions.0.from:
-        "ethereum:0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
+        "eth:0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
      directlyReceivedPermissions.1.from:
-        "ethereum:0x16193e14197c10109F3e81b938153A04A2a00190"
+        "eth:0x16193e14197c10109F3e81b938153A04A2a00190"
      directlyReceivedPermissions.2.from:
-        "ethereum:0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
+        "eth:0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      directlyReceivedPermissions.3.from:
-        "ethereum:0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
+        "eth:0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      directlyReceivedPermissions.4.from:
-        "ethereum:0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
+        "eth:0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      directlyReceivedPermissions.5.from:
-        "ethereum:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "eth:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      directlyReceivedPermissions.6.from:
-        "ethereum:0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
+        "eth:0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
      directlyReceivedPermissions.7.from:
-        "ethereum:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
+        "eth:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
      directlyReceivedPermissions.8.from:
-        "ethereum:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
+        "eth:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      directlyReceivedPermissions.9.from:
-        "ethereum:0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
+        "eth:0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
    }
```

```diff
    EOA  (0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x16193e14197c10109F3e81b938153A04A2a00190"
+        "eth:0x16193e14197c10109F3e81b938153A04A2a00190"
      receivedPermissions.1.from:
-        "ethereum:0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
+        "eth:0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
    }
```

```diff
    EOA  (0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
+        "eth:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      receivedPermissions.1.from:
-        "ethereum:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
+        "eth:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      receivedPermissions.2.from:
-        "ethereum:0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
+        "eth:0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
    }
```

```diff
    EOA  (0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "eth:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      receivedPermissions.1.from:
-        "ethereum:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "eth:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
    }
```

```diff
    contract Xterio Multisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      receivedPermissions.0.via.0.address:
-        "ethereum:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      receivedPermissions.0.from:
-        "ethereum:0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
+        "eth:0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
      receivedPermissions.1.via.0.address:
-        "ethereum:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      receivedPermissions.1.from:
-        "ethereum:0x16193e14197c10109F3e81b938153A04A2a00190"
+        "eth:0x16193e14197c10109F3e81b938153A04A2a00190"
      receivedPermissions.2.via.0.address:
-        "ethereum:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      receivedPermissions.2.from:
-        "ethereum:0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
+        "eth:0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      receivedPermissions.3.via.0.address:
-        "ethereum:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      receivedPermissions.3.from:
-        "ethereum:0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
+        "eth:0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      receivedPermissions.4.via.0.address:
-        "ethereum:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      receivedPermissions.4.from:
-        "ethereum:0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
+        "eth:0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      receivedPermissions.5.via.0.address:
-        "ethereum:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      receivedPermissions.5.from:
-        "ethereum:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "eth:0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      receivedPermissions.6.via.0.address:
-        "ethereum:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      receivedPermissions.6.from:
-        "ethereum:0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
+        "eth:0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
      receivedPermissions.7.via.0.address:
-        "ethereum:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      receivedPermissions.7.from:
-        "ethereum:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
+        "eth:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C"
      receivedPermissions.8.via.0.address:
-        "ethereum:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      receivedPermissions.8.from:
-        "ethereum:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
+        "eth:0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      receivedPermissions.9.via.0.address:
-        "ethereum:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      receivedPermissions.9.from:
-        "ethereum:0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
+        "eth:0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      directlyReceivedPermissions.0.from:
-        "ethereum:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "eth:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
    }
```

Generated with discovered.json: 0xf6ad695023df996bab0b33a7faf4c254f58405c6

# Diff at Mon, 16 Jun 2025 08:43:34 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e1208475abce20cea1768d2e4878c03350c1b7c9 block: 22297620
- current block number: 22297620

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22297620 (main branch discovery), not current.

```diff
    contract L1CrossDomainMessenger (0x702dF90E92A6841c9013faE6D724ddFA8F141d5C) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$admin:
+        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
    }
```

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: None
      directlyReceivedPermissions.9:
+        {"permission":"upgrade","from":"ethereum:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C","role":"admin"}
    }
```

```diff
    contract Xterio Multisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      receivedPermissions.9:
+        {"permission":"upgrade","from":"ethereum:0x702dF90E92A6841c9013faE6D724ddFA8F141d5C","role":"admin","via":[{"address":"ethereum:0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
    }
```

Generated with discovered.json: 0xbac2f19b7f82e540f5ad6d438c094761a18b012e

# Diff at Fri, 30 May 2025 07:18:36 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@a4d8c436027d17df0f9b76843cd6deb1888fa381 block: 22297620
- current block number: 22297620

## Description

config: change comment about eip1559 fee val

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22297620 (main branch discovery), not current.

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      fieldMeta.eip1559Denominator:
+        {"description":"volatility param: lower denominator -> quicker fee changes on L2"}
    }
```

Generated with discovered.json: 0x8d4d720f90c9ce0c93a78a8833801dc8c2d34455

# Diff at Fri, 23 May 2025 09:41:08 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 22297620
- current block number: 22297620

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22297620 (main branch discovery), not current.

```diff
    EOA  (0x39857a92E26648438d9c7dDDa1Ee3e481dea54B3) {
    +++ description: None
      receivedPermissions.0.role:
+        ".batcherHash"
    }
```

```diff
    EOA  (0x8b3B4F6C348f6baC39190B89c801E61E41F05b88) {
    +++ description: None
      receivedPermissions.1:
+        {"permission":"challenge","from":"0x5A0492D20D984eE904E46E6Ff24572bc755abb28","role":".CHALLENGER"}
      receivedPermissions.0.role:
+        ".challenger"
    }
```

```diff
    contract Safe (0x8f33C32503B860eDd31BeC1c80669aFee40901f3) {
    +++ description: None
      receivedPermissions.0.role:
+        ".privilegedAddress"
    }
```

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: None
      directlyReceivedPermissions.8.role:
+        "admin"
      directlyReceivedPermissions.7.from:
-        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
+        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      directlyReceivedPermissions.7.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      directlyReceivedPermissions.7.role:
+        "admin"
      directlyReceivedPermissions.6.from:
-        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
+        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      directlyReceivedPermissions.6.role:
+        "admin"
      directlyReceivedPermissions.5.from:
-        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
+        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      directlyReceivedPermissions.5.role:
+        "admin"
      directlyReceivedPermissions.4.from:
-        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
+        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      directlyReceivedPermissions.4.role:
+        "admin"
      directlyReceivedPermissions.3.from:
-        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
+        "0x16193e14197c10109F3e81b938153A04A2a00190"
      directlyReceivedPermissions.3.role:
+        "admin"
      directlyReceivedPermissions.2.from:
-        "0x16193e14197c10109F3e81b938153A04A2a00190"
+        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      directlyReceivedPermissions.2.role:
+        "admin"
      directlyReceivedPermissions.1.from:
-        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      directlyReceivedPermissions.1.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
      directlyReceivedPermissions.1.role:
+        ".$admin"
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    EOA  (0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf) {
    +++ description: None
      receivedPermissions.1.role:
+        ".owner"
      receivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    EOA  (0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787) {
    +++ description: None
      receivedPermissions.2:
+        {"permission":"guard","from":"0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A","role":".GUARDIAN"}
      receivedPermissions.1.role:
+        ".guardian"
      receivedPermissions.0.role:
+        ".guardian"
    }
```

```diff
    EOA  (0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D) {
    +++ description: None
      receivedPermissions.1:
+        {"permission":"propose","from":"0x5A0492D20D984eE904E46E6Ff24572bc755abb28","role":".proposer"}
      receivedPermissions.0.role:
+        ".PROPOSER"
    }
```

```diff
    contract Xterio Multisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      receivedPermissions.8.role:
+        "admin"
      receivedPermissions.7.from:
-        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
+        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      receivedPermissions.7.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      receivedPermissions.7.role:
+        "admin"
      receivedPermissions.6.from:
-        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
+        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      receivedPermissions.6.role:
+        "admin"
      receivedPermissions.5.from:
-        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
+        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      receivedPermissions.5.role:
+        "admin"
      receivedPermissions.4.from:
-        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
+        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      receivedPermissions.4.role:
+        "admin"
      receivedPermissions.3.from:
-        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
+        "0x16193e14197c10109F3e81b938153A04A2a00190"
      receivedPermissions.3.role:
+        "admin"
      receivedPermissions.2.from:
-        "0x16193e14197c10109F3e81b938153A04A2a00190"
+        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      receivedPermissions.2.role:
+        "admin"
      receivedPermissions.1.from:
-        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      receivedPermissions.1.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
      receivedPermissions.1.role:
+        ".$admin"
      receivedPermissions.0.role:
+        ".owner"
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

Generated with discovered.json: 0x04187c77a5aed182deba3712443819c086031654

# Diff at Tue, 29 Apr 2025 08:19:15 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 22297620
- current block number: 22297620

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22297620 (main branch discovery), not current.

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: The DataAvailabilityChallenge contract is used to challenge the full availability of data behind commimted transaction data hashes. See the technology section for more details.
      issuedPermissions:
-        [{"permission":"interact","to":"0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf","description":"can upgrade the parameters of DA challenges like the bond size or refund percentages, potentially making challenges infeasable or insecure.","via":[]},{"permission":"upgrade","to":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}]
    }
```

```diff
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}]
    }
```

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","description":"upgrading the bridge implementation can give access to all funds escrowed therein.","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}]
    }
```

```diff
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}]
    }
```

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions:
-        [{"permission":"challenge","to":"0x8b3B4F6C348f6baC39190B89c801E61E41F05b88","via":[]},{"permission":"propose","to":"0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D","via":[]},{"permission":"upgrade","to":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}]
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions:
-        [{"permission":"interact","to":"0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf","description":"it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system.","via":[]},{"permission":"sequence","to":"0x39857a92E26648438d9c7dDDa1Ee3e481dea54B3","via":[]},{"permission":"upgrade","to":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}]
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals. Forced transactions from Layer 1 are disabled.
      issuedPermissions:
-        [{"permission":"guard","to":"0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787","via":[]},{"permission":"interact","to":"0x8f33C32503B860eDd31BeC1c80669aFee40901f3","description":"withdraw all ETH without proof.","via":[]},{"permission":"upgrade","to":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}]
    }
```

```diff
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions:
-        [{"permission":"interact","to":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","description":"set and change address mappings.","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}]
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions:
-        [{"permission":"guard","to":"0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787","via":[]},{"permission":"upgrade","to":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}]
    }
```

Generated with discovered.json: 0x5ab1198f0ac9b4834e1f198800fa09ebdda0b2ad

# Diff at Fri, 18 Apr 2025 18:48:46 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@1dee5bc960c23f20e33ad3548023a46f9d9c2128 block: 22208349
- current block number: 22297620

## Description

upgrade to 'special' OptiPortal without deposited tx mechanism and with a permissioned withdrawEth function.

## Watched changes

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals. Forced transactions from Layer 1 are disabled.
      template:
-        "opstack/OptimismPortal"
+        "opstack/OptimismPortalAdminWithdraw"
      sourceHashes.1:
-        "0xe35fb7bc0433439337b3eadda3d6fb7991918162f62a337a695e8c7f948cdd35"
+        "0x106b0e020294fd04557c64727796c1a7afc80dba9c83e38e52b5282d4d1531f5"
      description:
-        "The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."
+        "The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals. Forced transactions from Layer 1 are disabled."
      issuedPermissions.2:
+        {"permission":"upgrade","to":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      issuedPermissions.1.permission:
-        "upgrade"
+        "guard"
      issuedPermissions.1.to:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
+        "0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
      issuedPermissions.1.via.0:
-        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}
      issuedPermissions.0.permission:
-        "guard"
+        "interact"
      issuedPermissions.0.to:
-        "0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
+        "0x8f33C32503B860eDd31BeC1c80669aFee40901f3"
      issuedPermissions.0.description:
+        "withdraw all ETH without proof."
      values.$implementation:
-        "0xb6a5DCc244EfAbE3194cf5e5590a463f44eD5784"
+        "0xEdE953bab7C50B2e5150316Ae0574F0cbA4068a9"
      values.$pastUpgrades.1:
+        ["2024-05-24T08:53:23.000Z","0xc93dc2274b4ce4975aae8b5d6ffde3b52c6457d4c11400d710a63142d369fa83",["0xb6a5DCc244EfAbE3194cf5e5590a463f44eD5784"]]
      values.$pastUpgrades.0.2:
-        "0xc93dc2274b4ce4975aae8b5d6ffde3b52c6457d4c11400d710a63142d369fa83"
+        ["0xEdE953bab7C50B2e5150316Ae0574F0cbA4068a9"]
      values.$pastUpgrades.0.1:
-        "2024-05-24T08:53:23.000Z"
+        "0x28fc02b17e9d4fc1107f498afbce93158b39649d34acf6f709626e3a326037ad"
      values.$pastUpgrades.0.0:
-        ["0xb6a5DCc244EfAbE3194cf5e5590a463f44eD5784"]
+        "2025-04-16T15:34:35.000Z"
      values.$upgradeCount:
-        1
+        2
      values.privilegedAddress:
+        "0x8f33C32503B860eDd31BeC1c80669aFee40901f3"
    }
```

```diff
+   Status: CREATED
    contract Safe (0x8f33C32503B860eDd31BeC1c80669aFee40901f3)
    +++ description: None
```

## Source code changes

```diff
.../OptimismPortal/OptimismPortal.sol              |   28 +-
 .../projects/xterio/ethereum/.flat/Safe/Safe.sol   | 1088 ++++++++++++++++++++
 .../xterio/ethereum/.flat/Safe/SafeProxy.p.sol     |   37 +
 3 files changed, 1144 insertions(+), 9 deletions(-)
```

Generated with discovered.json: 0x62b9ac5f263a51313722499882de9b8fe37c5308

# Diff at Sun, 06 Apr 2025 08:20:47 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@02dea11f7707601873600e275c4e2b7792c1a190 block: 21235438
- current block number: 22208349

## Description

Operators change, no change to implementations.

## Watched changes

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.1.permission:
-        "propose"
+        "challenge"
      issuedPermissions.1.to:
-        "0x7d2f9b38866141Bf090DD670A826F27eA2408Ad4"
+        "0x8b3B4F6C348f6baC39190B89c801E61E41F05b88"
      issuedPermissions.0.permission:
-        "challenge"
+        "propose"
      issuedPermissions.0.to:
-        "0xfA8d42bDE52C2B8B05fE5EeCbAdEa6CB698A0Bc5"
+        "0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D"
      values.$pastUpgrades.2:
+        ["2025-04-05T14:16:59.000Z","0x3c36d0fd57e70dee54e8ecc5c70de812a57dd8bc3db576cf12ce164acbeb8cce",["0xA9D78F579f1B30194F3c2Ca1987A9B91A33BDF08"]]
      values.$pastUpgrades.1:
+        ["2025-04-05T14:25:47.000Z","0x4dbaa9a0411962209ad663ec973dca85671030aef9bbf598b9727a292a83525d",["0x48Ef83Cf812f291EDB00C2D48440Ee90cD12be1a"]]
      values.$upgradeCount:
-        1
+        3
+++ severity: HIGH
      values.challenger:
-        "0xfA8d42bDE52C2B8B05fE5EeCbAdEa6CB698A0Bc5"
+        "0x8b3B4F6C348f6baC39190B89c801E61E41F05b88"
      values.CHALLENGER:
-        "0xfA8d42bDE52C2B8B05fE5EeCbAdEa6CB698A0Bc5"
+        "0x8b3B4F6C348f6baC39190B89c801E61E41F05b88"
+++ severity: HIGH
      values.proposer:
-        "0x7d2f9b38866141Bf090DD670A826F27eA2408Ad4"
+        "0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D"
      values.PROPOSER:
-        "0x7d2f9b38866141Bf090DD670A826F27eA2408Ad4"
+        "0xE4Cb2fd9E409ABE977EC946D54b59034C39AB07D"
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.1.to:
-        "0x7d6251D49A102a330CfB46d132982781620700Cb"
+        "0x39857a92E26648438d9c7dDDa1Ee3e481dea54B3"
      values.batcherHash:
-        "0x7d6251D49A102a330CfB46d132982781620700Cb"
+        "0x39857a92E26648438d9c7dDDa1Ee3e481dea54B3"
      values.unsafeBlockSigner:
-        "0xcbdD38Ce74BA96F0ae3D2E608DA96Ec744c80A7E"
+        "0x7a4e92aD7E40C8df264eD18010847e6C27AB3d82"
    }
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21235438 (main branch discovery), not current.

```diff
    contract Xterio (0x8B6341E18B2DC644cA94eD85173691873626fc7F) {
    +++ description: None
      name:
+        "Xterio"
    }
```

```diff
    contract AltLayer 3 (0xa8AC7D03BEb92Fa3E6030AEB21629D00Ffb66dD7) {
    +++ description: None
      name:
+        "AltLayer 3"
    }
```

```diff
    contract AltLayer 1 (0xaC79765A73eB9dcBd3c427181E6819902AE25b48) {
    +++ description: None
      name:
+        "AltLayer 1"
    }
```

```diff
    contract AltLayer 2 (0xB5b01E638CEF6AE50462A487d70005D6fe85eCf2) {
    +++ description: None
      name:
+        "AltLayer 2"
    }
```

```diff
    contract Xterio Multisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      name:
-        "XterioMultisig"
+        "Xterio Multisig"
    }
```

Generated with discovered.json: 0x430f06fd51d6858860ea7c502872a8febea9c3f7

# Diff at Thu, 27 Mar 2025 11:15:45 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@8cc2e36080df3a74dfd8475d41c64f46203f5218 block: 21235438
- current block number: 21235438

## Description

Config related: add guardian description details, hide some noisy values, hide AddressManager as spam cat, add proposer / challenger to permissioned opfp chains.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21235438 (main branch discovery), not current.

```diff
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      category:
+        {"name":"Spam","priority":-1}
    }
```

Generated with discovered.json: 0x12c26ba7ed08b5897fde661a881cdd3743520dfe

# Diff at Wed, 19 Mar 2025 13:05:55 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e950b6e93c84855ee2ec1740913b7b4c994b9ae2 block: 21235438
- current block number: 21235438

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21235438 (main branch discovery), not current.

```diff
    contract undefined (0x7d2f9b38866141Bf090DD670A826F27eA2408Ad4) {
    +++ description: None
      severity:
-        "HIGH"
    }
```

```diff
    contract undefined (0xfA8d42bDE52C2B8B05fE5EeCbAdEa6CB698A0Bc5) {
    +++ description: None
      severity:
-        "HIGH"
    }
```

Generated with discovered.json: 0x1c5bcea752dad3df411c19132206a77bdeb627b6

# Diff at Tue, 04 Mar 2025 11:26:51 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@be38e12d3ff947ca8de40f3a23a9ba1875a54f5a block: 21235438
- current block number: 21235438

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21235438 (main branch discovery), not current.

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isSomeTxsLengthEqualToCelestiaDAExample:
-        false
      values.opStackDA.isUsingCelestia:
+        false
    }
```

Generated with discovered.json: 0x4226c19e8f7a14ef5a02d29e3363c92193d9a201

# Diff at Tue, 04 Mar 2025 10:40:14 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 21235438
- current block number: 21235438

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21235438 (main branch discovery), not current.

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: The DataAvailabilityChallenge contract is used to challenge the full availability of data behind commimted transaction data hashes. See the technology section for more details.
      sinceBlock:
+        19938634
    }
```

```diff
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      sinceBlock:
+        19938644
    }
```

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      sinceBlock:
+        19938640
    }
```

```diff
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      sinceBlock:
+        19938643
    }
```

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      sinceBlock:
+        19938646
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      sinceBlock:
+        19938639
    }
```

```diff
    contract L1CrossDomainMessenger (0x702dF90E92A6841c9013faE6D724ddFA8F141d5C) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      sinceBlock:
+        19938642
    }
```

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: None
      sinceBlock:
+        19938624
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      sinceBlock:
+        19938638
    }
```

```diff
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      sinceBlock:
+        19938623
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      sinceBlock:
+        19938627
    }
```

```diff
    contract XterioMultisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      sinceBlock:
+        19938622
    }
```

Generated with discovered.json: 0x448420240927e6c31c9217c0254079482fc50caf

# Diff at Wed, 26 Feb 2025 10:33:16 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@18513668f913fbe57a197f43655b19111df0e627 block: 21235438
- current block number: 21235438

## Description

config related: added categories for all opstack, op stack and polygoncdk stack templates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21235438 (main branch discovery), not current.

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: The DataAvailabilityChallenge contract is used to challenge the full availability of data behind commimted transaction data hashes. See the technology section for more details.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract L1CrossDomainMessenger (0x702dF90E92A6841c9013faE6D724ddFA8F141d5C) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      category:
+        {"name":"Governance","priority":3}
    }
```

Generated with discovered.json: 0x5963c9ee42a9214929ceafad1b179e1d01a56091

# Diff at Fri, 21 Feb 2025 14:11:53 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@d219f271711b2cf7a164e3443bead5e4957d13a8 block: 21235438
- current block number: 21235438

## Description

Config related: Change some severities and add templates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21235438 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      fieldMeta.proposer:
+        {"severity":"HIGH"}
      fieldMeta.challenger:
+        {"severity":"HIGH"}
      fieldMeta.deletedOutputs:
+        {"severity":"HIGH"}
    }
```

Generated with discovered.json: 0x1b55d427279901d761288c4b0a464b5cd7e8d7d9

# Diff at Fri, 21 Feb 2025 09:00:29 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1cf9ec35847912163c4b663a633e258a434c0bca block: 21235438
- current block number: 21235438

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21235438 (main branch discovery), not current.

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      categories:
-        ["Gateways&Escrows"]
    }
```

```diff
    contract L1CrossDomainMessenger (0x702dF90E92A6841c9013faE6D724ddFA8F141d5C) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      categories:
-        ["Core"]
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      categories:
-        ["Upgrades&Governance"]
    }
```

Generated with discovered.json: 0xa5a2942548859e1d7acdc6897749ab38e246e1d3

# Diff at Mon, 10 Feb 2025 19:05:04 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@3756adff7c1ac86d8af3374a90a75c1999aae2b3 block: 21235438
- current block number: 21235438

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21235438 (main branch discovery), not current.

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isUsingEigenDA:
+        false
    }
```

Generated with discovered.json: 0x3697063da0893d185bd79346001dab3c9fd80ece

# Diff at Tue, 04 Feb 2025 12:33:31 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@145553eed7ba44636411ecb25e4099728acd02f9 block: 21235438
- current block number: 21235438

## Description

Rename 'configure' permission to 'interact'

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21235438 (main branch discovery), not current.

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: The DataAvailabilityChallenge contract is used to challenge the full availability of data behind commimted transaction data hashes. See the technology section for more details.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: None
      directlyReceivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract XterioMultisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      receivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

Generated with discovered.json: 0xda2877ff27ef2ac1f11ad8fc0dc5aa01c0ca5a3c

# Diff at Mon, 20 Jan 2025 11:10:23 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 21235438
- current block number: 21235438

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21235438 (main branch discovery), not current.

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: The DataAvailabilityChallenge contract is used to challenge the full availability of data behind commimted transaction data hashes. See the technology section for more details.
      issuedPermissions.1.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.target:
-        "0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf"
      issuedPermissions.0.to:
+        "0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf"
      issuedPermissions.0.description:
+        "can upgrade the parameters of DA challenges like the bond size or refund percentages, potentially making challenges infeasable or insecure."
    }
```

```diff
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions.0.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
    }
```

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      issuedPermissions.0.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.via.0.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      issuedPermissions.0.to:
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions.0.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
    }
```

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.2.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.1.target:
-        "0x7d2f9b38866141Bf090DD670A826F27eA2408Ad4"
      issuedPermissions.1.to:
+        "0x7d2f9b38866141Bf090DD670A826F27eA2408Ad4"
      issuedPermissions.0.target:
-        "0xfA8d42bDE52C2B8B05fE5EeCbAdEa6CB698A0Bc5"
      issuedPermissions.0.to:
+        "0xfA8d42bDE52C2B8B05fE5EeCbAdEa6CB698A0Bc5"
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.2.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.1.target:
-        "0x7d6251D49A102a330CfB46d132982781620700Cb"
      issuedPermissions.1.to:
+        "0x7d6251D49A102a330CfB46d132982781620700Cb"
      issuedPermissions.0.target:
-        "0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf"
      issuedPermissions.0.to:
+        "0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf"
      issuedPermissions.0.description:
+        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
    }
```

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: None
      directlyReceivedPermissions.8.target:
-        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      directlyReceivedPermissions.8.from:
+        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      directlyReceivedPermissions.7.target:
-        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      directlyReceivedPermissions.7.from:
+        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      directlyReceivedPermissions.6.target:
-        "0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
      directlyReceivedPermissions.6.from:
+        "0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
      directlyReceivedPermissions.5.target:
-        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      directlyReceivedPermissions.5.from:
+        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      directlyReceivedPermissions.4.target:
-        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      directlyReceivedPermissions.4.from:
+        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      directlyReceivedPermissions.3.target:
-        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      directlyReceivedPermissions.3.from:
+        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      directlyReceivedPermissions.2.target:
-        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      directlyReceivedPermissions.2.from:
+        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      directlyReceivedPermissions.1.target:
-        "0x16193e14197c10109F3e81b938153A04A2a00190"
      directlyReceivedPermissions.1.from:
+        "0x16193e14197c10109F3e81b938153A04A2a00190"
      directlyReceivedPermissions.0.target:
-        "0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
      directlyReceivedPermissions.0.from:
+        "0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.1.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.target:
-        "0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
      issuedPermissions.0.to:
+        "0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
    }
```

```diff
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.via.0.description:
-        "set and change address mappings."
      issuedPermissions.0.to:
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.description:
+        "set and change address mappings."
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions.1.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.target:
-        "0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
      issuedPermissions.0.to:
+        "0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
    }
```

```diff
    contract XterioMultisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      receivedPermissions.8.target:
-        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      receivedPermissions.8.from:
+        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      receivedPermissions.7.target:
-        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      receivedPermissions.7.from:
+        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      receivedPermissions.6.target:
-        "0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
      receivedPermissions.6.from:
+        "0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
      receivedPermissions.5.target:
-        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      receivedPermissions.5.from:
+        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      receivedPermissions.4.target:
-        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      receivedPermissions.4.from:
+        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      receivedPermissions.3.target:
-        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      receivedPermissions.3.from:
+        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      receivedPermissions.2.target:
-        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      receivedPermissions.2.from:
+        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      receivedPermissions.1.target:
-        "0x16193e14197c10109F3e81b938153A04A2a00190"
      receivedPermissions.1.from:
+        "0x16193e14197c10109F3e81b938153A04A2a00190"
      receivedPermissions.0.target:
-        "0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
      receivedPermissions.0.from:
+        "0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
      directlyReceivedPermissions.0.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
      directlyReceivedPermissions.0.from:
+        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
    }
```

Generated with discovered.json: 0xb36b1474b1754b4bb36e5e46c8b92190dc9f0ba7

# Diff at Wed, 08 Jan 2025 09:08:41 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@deefa974378c2cd6b74f061e1f5a494bbbe1d63a block: 21235438
- current block number: 21235438

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21235438 (main branch discovery), not current.

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      description:
-        "The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."
+        "The main entry point to deposit ERC20 tokens from host chain to this chain."
    }
```

Generated with discovered.json: 0x64f8b37f92b6ad4398c076af14a625db0a464822

# Diff at Thu, 21 Nov 2024 10:14:24 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@de1745323b367dd0fbb18ad6c862147dd90e90b0 block: 20327427
- current block number: 21235438

## Description

Move to discodriven data.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
-   Status: DELETED
    contract PreimageOracle (0x089A4754538B74Ff63Bc6AbeaD7A95973aB03572)
    +++ description: None
```

```diff
-   Status: DELETED
    contract DelayedWETH (0x0eCe16401A80551345bB672f177f51A8755FF775)
    +++ description: None
```

```diff
-   Status: DELETED
    contract PermissionedDisputeGame (0x15b689D90a62C3F7380054C8867b7e7f17Fa7F4B)
    +++ description: None
```

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: The DataAvailabilityChallenge contract is used to challenge the full availability of data behind commimted transaction data hashes. See the technology section for more details.
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "configure"
      issuedPermissions.0.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
+        "0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf"
      issuedPermissions.0.via.0:
-        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
      template:
+        "opstack/DataAvailabilityChallenge"
      description:
+        "The DataAvailabilityChallenge contract is used to challenge the full availability of data behind commimted transaction data hashes. See the technology section for more details."
    }
```

```diff
-   Status: DELETED
    contract MIPS (0x253DdBb3549e0CEFaaaA7f71BE502C5b94771dDc)
    +++ description: None
```

```diff
-   Status: DELETED
    contract DisputeGameFactory (0x443164F044D8840479234e00E7aD5bb06b85fC78)
    +++ description: None
```

```diff
-   Status: DELETED
    contract FaultDisputeGame (0x56c7D88ee46BfD6cab37508E2e39e985a68007a4)
    +++ description: None
```

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: None
      directlyReceivedPermissions.10:
-        {"permission":"upgrade","target":"0xcbF423525a5471Fc5037a5397F99f6F09fe41379"}
      directlyReceivedPermissions.9:
-        {"permission":"upgrade","target":"0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"}
      directlyReceivedPermissions.8.target:
-        "0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
+        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      directlyReceivedPermissions.7.target:
-        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      directlyReceivedPermissions.6.target:
-        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
+        "0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
      directlyReceivedPermissions.5.target:
-        "0x443164F044D8840479234e00E7aD5bb06b85fC78"
+        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      directlyReceivedPermissions.4.target:
-        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
+        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      directlyReceivedPermissions.4.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      directlyReceivedPermissions.3.target:
-        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
+        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      directlyReceivedPermissions.3.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
      directlyReceivedPermissions.2.target:
-        "0x16193e14197c10109F3e81b938153A04A2a00190"
+        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      directlyReceivedPermissions.1.target:
-        "0x0eCe16401A80551345bB672f177f51A8755FF775"
+        "0x16193e14197c10109F3e81b938153A04A2a00190"
    }
```

```diff
    contract XterioMultisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      name:
-        "RollupOwnerMultisig"
+        "XterioMultisig"
      receivedPermissions.10:
-        {"permission":"upgrade","target":"0xcbF423525a5471Fc5037a5397F99f6F09fe41379","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      receivedPermissions.9:
-        {"permission":"upgrade","target":"0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      receivedPermissions.8.target:
-        "0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
+        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      receivedPermissions.7.target:
-        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
+        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      receivedPermissions.6.target:
-        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
+        "0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"
      receivedPermissions.5.target:
-        "0x443164F044D8840479234e00E7aD5bb06b85fC78"
+        "0x5A0492D20D984eE904E46E6Ff24572bc755abb28"
      receivedPermissions.4.target:
-        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
+        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      receivedPermissions.4.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      receivedPermissions.3.target:
-        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
+        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      receivedPermissions.3.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
      receivedPermissions.2.target:
-        "0x16193e14197c10109F3e81b938153A04A2a00190"
+        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      receivedPermissions.1.target:
-        "0x0eCe16401A80551345bB672f177f51A8755FF775"
+        "0x16193e14197c10109F3e81b938153A04A2a00190"
    }
```

Generated with discovered.json: 0x56609e695292eeaa9edd00b3549023c873120e65

# Diff at Fri, 01 Nov 2024 12:24:17 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@cd1f0e71bb08ce16b2084a11b768538e8aa6ba8c block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      issuedPermissions.0.via.0.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: None
      directlyReceivedPermissions.4.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      description:
-        "This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
+        "This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
    }
```

```diff
    contract RollupOwnerMultisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      receivedPermissions.4.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

Generated with discovered.json: 0x2cb6421b5874fefd4b9b1a1722dcd6f691f697f9

# Diff at Tue, 29 Oct 2024 13:20:37 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@7b3fc9dc9074e1d423b48522c3f0273c86aab54a block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      fieldMeta:
+        {"FINALIZATION_PERIOD_SECONDS":{"description":"Challenge period (Number of seconds until a state root is finalized)."}}
    }
```

Generated with discovered.json: 0x4e94caf821571b23cd95d2815f2f9e9d2d6336f4

# Diff at Tue, 22 Oct 2024 13:52:04 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@c4e420ffba204be049626040a9ea287e023948f8 block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      template:
-        "opstack/SuperchainConfig"
+        "opstack/SuperchainConfigFake"
      description:
-        "Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
+        "This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
    }
```

Generated with discovered.json: 0xf9d03c08d0b8230c983f4dd15842c8143a8afdb5

# Diff at Mon, 21 Oct 2024 12:50:25 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e660599f23a07618fe949a07be1f516ce44f1914 block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      descriptions:
-        ["Used to bridge ERC-721 tokens from host chain to this chain."]
      description:
+        "Used to bridge ERC-721 tokens from host chain to this chain."
    }
```

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      descriptions:
-        ["The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."]
      description:
+        "The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."
    }
```

```diff
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      descriptions:
-        ["A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."]
      description:
+        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."
    }
```

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      descriptions:
-        ["Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."]
      description:
+        "Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      descriptions:
-        ["Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."]
      description:
+        "Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."
    }
```

```diff
    contract L1CrossDomainMessenger (0x702dF90E92A6841c9013faE6D724ddFA8F141d5C) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      descriptions:
-        ["Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."]
      description:
+        "Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      descriptions:
-        ["The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."]
      description:
+        "The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."
    }
```

```diff
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      descriptions:
-        ["Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."]
      description:
+        "Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      descriptions:
-        ["Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."]
      description:
+        "Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
    }
```

Generated with discovered.json: 0xe3fafcc9ee419fe5ba67f9e0337120b38d17cdb5

# Diff at Mon, 21 Oct 2024 11:12:15 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8895d33866f5665c4c710f4ddaa32bfa63cc3c78 block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract DelayedWETH (0x0eCe16401A80551345bB672f177f51A8755FF775) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0x911465C106e5AB1EC11BEd89247Aa3DaF62Ec4Fa"]
      values.$pastUpgrades.0.1:
-        ["0x911465C106e5AB1EC11BEd89247Aa3DaF62Ec4Fa"]
+        "0xce06ab8c22107235e7dd7cb3500cc8c44671f4e899eb896b7123c6609c48a872"
    }
```

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0x36b9F31874b8790d4caf341168A95FE165bA3C91"]
      values.$pastUpgrades.0.1:
-        ["0x36b9F31874b8790d4caf341168A95FE165bA3C91"]
+        "0x465aefa8c36215c06100fcbf16cbaa71fd724868198ee08eb244d5d8da359579"
    }
```

```diff
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      values.$pastUpgrades.0.2:
+        ["0x53699fbA16599c1425D2637B839bA59c121a2e6a"]
      values.$pastUpgrades.0.1:
-        ["0x53699fbA16599c1425D2637B839bA59c121a2e6a"]
+        "0xd9823971f20793a1a68411dcf5ba149a39f008846ff54dd5e2c1b0b34b9f7f76"
    }
```

```diff
    contract DisputeGameFactory (0x443164F044D8840479234e00E7aD5bb06b85fC78) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0x0a3D54e40093044296Ee9F2077f26a13337757Eb"]
      values.$pastUpgrades.0.1:
-        ["0x0a3D54e40093044296Ee9F2077f26a13337757Eb"]
+        "0xb748822beb9ef90de9084e76c6ce5a527bc118f48e909faea51f94523da158ed"
    }
```

```diff
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      values.$pastUpgrades.0.2:
+        ["0x78Bd7b48E74669Dd6709C111200c6B862505Fc4A"]
      values.$pastUpgrades.0.1:
-        ["0x78Bd7b48E74669Dd6709C111200c6B862505Fc4A"]
+        "0x63d43893fd0899e5a914ec85ab8a6a51145dca247068c0e07e8da1bfe0a5f773"
    }
```

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      values.$pastUpgrades.0.2:
+        ["0x48Ef83Cf812f291EDB00C2D48440Ee90cD12be1a"]
      values.$pastUpgrades.0.1:
-        ["0x48Ef83Cf812f291EDB00C2D48440Ee90cD12be1a"]
+        "0xf8a1b47bf39845927a0033efca9db32efafbab1739d90d59397062954922648f"
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.$pastUpgrades.0.2:
+        ["0x42557f7920a257C7be82C2dfafcEd7aC1CCDb43F"]
      values.$pastUpgrades.0.1:
-        ["0x42557f7920a257C7be82C2dfafcEd7aC1CCDb43F"]
+        "0x6c10c92d919e53ebe4d54bb529abd57139309544a6298583c987c7de23d34da8"
    }
```

```diff
    contract L1CrossDomainMessenger (0x702dF90E92A6841c9013faE6D724ddFA8F141d5C) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$pastUpgrades.0.2:
+        ["0x5eAAeabB78C28EF184Bb0cF9B0af6D2DA232679a"]
      values.$pastUpgrades.0.1:
-        ["0x5eAAeabB78C28EF184Bb0cF9B0af6D2DA232679a"]
+        "0x5888c2983d2dc736187d110addd45ae4aee47a310d83ff90b3640015291f97a4"
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      values.$pastUpgrades.0.2:
+        ["0xb6a5DCc244EfAbE3194cf5e5590a463f44eD5784"]
      values.$pastUpgrades.0.1:
-        ["0xb6a5DCc244EfAbE3194cf5e5590a463f44eD5784"]
+        "0xc93dc2274b4ce4975aae8b5d6ffde3b52c6457d4c11400d710a63142d369fa83"
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      values.$pastUpgrades.0.2:
+        ["0x17bcBF2A2CF8156cf4603f8aFAAB27Ec4e998888"]
      values.$pastUpgrades.0.1:
-        ["0x17bcBF2A2CF8156cf4603f8aFAAB27Ec4e998888"]
+        "0x4e3668c90f01d35d5753aa45cbb770cb11fc2cf6da435b6735896b9da961001b"
    }
```

Generated with discovered.json: 0x36a3ed370181ffec73d6ed057f9f0e2695051d97

# Diff at Wed, 16 Oct 2024 11:43:10 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@a3d139b799cc0b28e5e912febb17464d4e5aef5d block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.2:
+        {"permission":"upgrade","target":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}]}
      issuedPermissions.1:
+        {"permission":"propose","target":"0x7d2f9b38866141Bf090DD670A826F27eA2408Ad4","via":[]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "challenge"
      issuedPermissions.0.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
+        "0xfA8d42bDE52C2B8B05fE5EeCbAdEa6CB698A0Bc5"
      issuedPermissions.0.via.0:
-        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.2:
+        {"permission":"upgrade","target":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}]}
      issuedPermissions.1.permission:
-        "upgrade"
+        "sequence"
      issuedPermissions.1.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
+        "0x7d6251D49A102a330CfB46d132982781620700Cb"
      issuedPermissions.1.via.0:
-        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "guard"
      issuedPermissions.0.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
+        "0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
      issuedPermissions.0.via.0:
-        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "guard"
      issuedPermissions.0.target:
-        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
+        "0xdF3700a9Cf9c7506Ca3B41E6ba991476677A8787"
      issuedPermissions.0.via.0:
-        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

Generated with discovered.json: 0xabe57f1dc8e6dad4bb0e9f170a40ab7cfd82f3cf

# Diff at Mon, 14 Oct 2024 10:57:58 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1afc77ff111ceb0970e7d09efcc7b2f376b0c281 block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract PreimageOracle (0x089A4754538B74Ff63Bc6AbeaD7A95973aB03572) {
    +++ description: None
      sourceHashes:
+        ["0xfad0959800cdaf145db1109f3401621b37a4a0759e96e2528dd5fcdd9df10c5f"]
    }
```

```diff
    contract DelayedWETH (0x0eCe16401A80551345bB672f177f51A8755FF775) {
    +++ description: None
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0xf82405e0ecf8601e98840506178896abbb206185da06f95ef509314d08687442"]
    }
```

```diff
    contract PermissionedDisputeGame (0x15b689D90a62C3F7380054C8867b7e7f17Fa7F4B) {
    +++ description: None
      sourceHashes:
+        ["0x63281c83e986f99a1ae9516e21cfb837b6b7890ddcd37695ba59a62f9d894436"]
    }
```

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: None
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0xc3e65c7b165290e34daf0095d095072dd3684f21965a97ddedde3ab52b34b04a"]
    }
```

```diff
    contract MIPS (0x253DdBb3549e0CEFaaaA7f71BE502C5b94771dDc) {
    +++ description: None
      sourceHashes:
+        ["0xd7ae10b5c4f34815de81693db2a7198fe7e401acf8891edecccc6b4492000bf2"]
    }
```

```diff
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0x482ec6e91304ac39a3fb4505634427bddfddee23b8e93a4f7f995ca5083ae3c3"]
    }
```

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      sourceHashes:
+        ["0xbfb58685ff2f2f07eaa01a3c4e3c33c97686bfd3ae7c50c49f9da6ef5098cb31","0x1010ff7f40ab4d53e6d9996aefa04423dabe9d0e22fac2d02b330ed3aa2c5740"]
    }
```

```diff
    contract DisputeGameFactory (0x443164F044D8840479234e00E7aD5bb06b85fC78) {
    +++ description: None
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0x9bb48ab971d5ae364c19aa29e6eef56f1d698e2e858d5c9fe118cbb173bf7f1b"]
    }
```

```diff
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0x4c5ac4e53576924cabbd2a471f368a541bc3f4b1f53fa41a389692fcc62f6176"]
    }
```

```diff
    contract FaultDisputeGame (0x56c7D88ee46BfD6cab37508E2e39e985a68007a4) {
    +++ description: None
      sourceHashes:
+        ["0x3094c33884c66c72b3dea25156b30b006562dad0a2d333be8622188ba7d4f9da"]
    }
```

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0x025c187b0231be4785898f25f98d749f953f5d06781772aef242812e2ecf52e3"]
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0xdf9a11b46747139bfe0135df8a65a2728a2dbd60a689e2398c45627915cdd752"]
    }
```

```diff
    contract L1CrossDomainMessenger (0x702dF90E92A6841c9013faE6D724ddFA8F141d5C) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      sourceHashes:
+        ["0x20a2eb4d3677fc8a15e944f7b1843acd01b2e92acdc4c7a7f7a35b07b891149b","0x1cc8a3b7de3d2c54c4706bb3f3015714d3b56647fc9fbfd6f8b068f5f63c1c25"]
    }
```

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: None
      template:
-        "opstack/ProxyAdmin"
+        "global/ProxyAdmin"
      sourceHashes:
+        ["0x96d2f0fa1bd83ebd61ba6a2351c64c7fda7aa580b11ea67bb6bf4338e5c28512"]
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0xe35fb7bc0433439337b3eadda3d6fb7991918162f62a337a695e8c7f948cdd35"]
    }
```

```diff
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      sourceHashes:
+        ["0xdc86a850f11dc2b5c0472a05d0e3c14f239baf2c3b1ab19631591b0827985380"]
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      sourceHashes:
+        ["0x7913a1d7d0c47796c94eb6f8fd87a89ae9f2716eda57c9be4fd2b27c70bed617","0x3ac96c9c95e25f689f65a50f24b325e3f891029cb1cea96dc642418bbb535b1d"]
    }
```

```diff
    contract RollupOwnerMultisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      sourceHashes:
+        ["0x81a7349eebb98ac33b0bc6842e3cb258034a8f2a4ba004570bb8e2e25947f9ff","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

Generated with discovered.json: 0xfcb8579d577b945d4c77686724964edb6c196c8e

# Diff at Wed, 09 Oct 2024 13:11:00 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@37683e2b3d0587372f886eef49e921277810c8bf block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: None
      directlyReceivedPermissions.0.description:
+        "set and change address mappings."
    }
```

```diff
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.via.0.description:
+        "set and change address mappings."
      descriptions:
+        ["Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."]
    }
```

```diff
    contract RollupOwnerMultisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      receivedPermissions.0.description:
+        "set and change address mappings."
    }
```

Generated with discovered.json: 0x3e4777ce52cf67140c7802362e5d0262d9bd7ee4

# Diff at Tue, 01 Oct 2024 11:11:55 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bd754dc73c66120164006054f8d25c5fae9cd910 block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract DelayedWETH (0x0eCe16401A80551345bB672f177f51A8755FF775) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-05-24T08:53:11.000Z",["0x911465C106e5AB1EC11BEd89247Aa3DaF62Ec4Fa"]]]
    }
```

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-05-24T08:45:47.000Z",["0x36b9F31874b8790d4caf341168A95FE165bA3C91"]]]
    }
```

```diff
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      values.$pastUpgrades:
+        [["2024-05-24T08:51:11.000Z",["0x53699fbA16599c1425D2637B839bA59c121a2e6a"]]]
    }
```

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      values.$pastUpgrades:
+        []
    }
```

```diff
    contract DisputeGameFactory (0x443164F044D8840479234e00E7aD5bb06b85fC78) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-05-24T08:52:47.000Z",["0x0a3D54e40093044296Ee9F2077f26a13337757Eb"]]]
    }
```

```diff
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      values.$pastUpgrades:
+        [["2024-05-24T08:51:23.000Z",["0x78Bd7b48E74669Dd6709C111200c6B862505Fc4A"]]]
    }
```

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      values.$pastUpgrades:
+        [["2024-05-24T08:52:23.000Z",["0x48Ef83Cf812f291EDB00C2D48440Ee90cD12be1a"]]]
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.$pastUpgrades:
+        [["2024-05-24T08:50:35.000Z",["0x42557f7920a257C7be82C2dfafcEd7aC1CCDb43F"]]]
    }
```

```diff
    contract L1CrossDomainMessenger (0x702dF90E92A6841c9013faE6D724ddFA8F141d5C) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$pastUpgrades:
+        [["2024-05-24T08:51:59.000Z",["0x5eAAeabB78C28EF184Bb0cF9B0af6D2DA232679a"]]]
      values.$upgradeCount:
+        1
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      values.$pastUpgrades:
+        [["2024-05-24T08:53:23.000Z",["0xb6a5DCc244EfAbE3194cf5e5590a463f44eD5784"]]]
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      values.$pastUpgrades:
+        [["2024-05-24T08:44:23.000Z",["0x17bcBF2A2CF8156cf4603f8aFAAB27Ec4e998888"]]]
    }
```

Generated with discovered.json: 0x33e57dd75ef384978c94432854bbc169fc83a440

# Diff at Sun, 08 Sep 2024 17:24:50 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@fd881462cca0d7ef4519f907f3c6cfd5fe1cde8f block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract DelayedWETH (0x0eCe16401A80551345bB672f177f51A8755FF775) {
    +++ description: None
      issuedPermissions.0.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0:
+        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: None
      issuedPermissions.0.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0:
+        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions.0.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0:
+        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      issuedPermissions.0.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0:
+        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0,"description":"upgrading bridge implementation allows to access all funds and change every system component."}
    }
```

```diff
    contract DisputeGameFactory (0x443164F044D8840479234e00E7aD5bb06b85fC78) {
    +++ description: None
      issuedPermissions.0.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0:
+        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions.0.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0:
+        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.0.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0:
+        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.1.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.1.via.0:
+        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: None
      descriptions:
-        ["It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component."]
      issuedPermissions:
-        [{"permission":"configure","target":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[]}]
      receivedPermissions:
-        [{"permission":"configure","target":"0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"},{"permission":"upgrade","target":"0x0eCe16401A80551345bB672f177f51A8755FF775"},{"permission":"upgrade","target":"0x16193e14197c10109F3e81b938153A04A2a00190"},{"permission":"upgrade","target":"0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"},{"permission":"upgrade","target":"0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"},{"permission":"upgrade","target":"0x443164F044D8840479234e00E7aD5bb06b85fC78"},{"permission":"upgrade","target":"0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"},{"permission":"upgrade","target":"0x5A0492D20D984eE904E46E6Ff24572bc755abb28"},{"permission":"upgrade","target":"0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"},{"permission":"upgrade","target":"0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"},{"permission":"upgrade","target":"0xcbF423525a5471Fc5037a5397F99f6F09fe41379"}]
      directlyReceivedPermissions:
+        [{"permission":"configure","target":"0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"},{"permission":"upgrade","target":"0x0eCe16401A80551345bB672f177f51A8755FF775"},{"permission":"upgrade","target":"0x16193e14197c10109F3e81b938153A04A2a00190"},{"permission":"upgrade","target":"0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"},{"permission":"upgrade","target":"0x2AD84AbD52050956AcC9c490D024b821A59e3FB6","description":"upgrading bridge implementation allows to access all funds and change every system component."},{"permission":"upgrade","target":"0x443164F044D8840479234e00E7aD5bb06b85fC78"},{"permission":"upgrade","target":"0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"},{"permission":"upgrade","target":"0x5A0492D20D984eE904E46E6Ff24572bc755abb28"},{"permission":"upgrade","target":"0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C"},{"permission":"upgrade","target":"0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"},{"permission":"upgrade","target":"0xcbF423525a5471Fc5037a5397F99f6F09fe41379"}]
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.0.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0:
+        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a) {
    +++ description: None
      issuedPermissions.0.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0:
+        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions.0.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574"
      issuedPermissions.0.via.0:
+        {"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","delay":0}
    }
```

```diff
    contract RollupOwnerMultisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: None
      descriptions:
-        ["It can act on behalf of 0x9e48d6bBca781c23392Ec459BfB3657C40a794A8, inheriting its permissions."]
      receivedPermissions.10:
+        {"permission":"upgrade","target":"0xcbF423525a5471Fc5037a5397F99f6F09fe41379","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      receivedPermissions.9:
+        {"permission":"upgrade","target":"0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      receivedPermissions.8:
+        {"permission":"upgrade","target":"0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      receivedPermissions.7:
+        {"permission":"upgrade","target":"0x5A0492D20D984eE904E46E6Ff24572bc755abb28","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      receivedPermissions.6:
+        {"permission":"upgrade","target":"0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      receivedPermissions.5:
+        {"permission":"upgrade","target":"0x443164F044D8840479234e00E7aD5bb06b85fC78","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      receivedPermissions.4:
+        {"permission":"upgrade","target":"0x2AD84AbD52050956AcC9c490D024b821A59e3FB6","description":"upgrading bridge implementation allows to access all funds and change every system component.","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      receivedPermissions.3:
+        {"permission":"upgrade","target":"0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      receivedPermissions.2:
+        {"permission":"upgrade","target":"0x16193e14197c10109F3e81b938153A04A2a00190","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      receivedPermissions.1:
+        {"permission":"upgrade","target":"0x0eCe16401A80551345bB672f177f51A8755FF775","via":[{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]}
      receivedPermissions.0.target:
-        "0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"
+        "0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"
      receivedPermissions.0.via:
+        [{"address":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]
      directlyReceivedPermissions:
+        [{"permission":"act","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"}]
    }
```

Generated with discovered.json: 0xda493c9a3d88eb5b3570d913bd305ca28691ad6b

# Diff at Fri, 30 Aug 2024 08:01:36 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@6c1bd1f41fadf5f2cb1c1805b5a2c6138a3ed35a block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component.
      receivedPermissions.10.via:
-        []
      receivedPermissions.9.via:
-        []
      receivedPermissions.8.via:
-        []
      receivedPermissions.7.via:
-        []
      receivedPermissions.6.via:
-        []
      receivedPermissions.5.via:
-        []
      receivedPermissions.4.via:
-        []
      receivedPermissions.3.via:
-        []
      receivedPermissions.2.via:
-        []
      receivedPermissions.1.via:
-        []
      receivedPermissions.0.via:
-        []
    }
```

```diff
    contract RollupOwnerMultisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: It can act on behalf of 0x9e48d6bBca781c23392Ec459BfB3657C40a794A8, inheriting its permissions.
      receivedPermissions.0.via:
-        []
    }
```

Generated with discovered.json: 0xc7facd7068cb04389fcd22d68237a9b85a7f4888

# Diff at Fri, 23 Aug 2024 09:56:27 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@67597c7d6c810bc726594446890178150240711e block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract DelayedWETH (0x0eCe16401A80551345bB672f177f51A8755FF775) {
    +++ description: None
      values.$upgradeCount:
+        1
    }
```

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: None
      values.$upgradeCount:
+        1
    }
```

```diff
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      values.$upgradeCount:
+        1
    }
```

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      values.$upgradeCount:
+        0
    }
```

```diff
    contract DisputeGameFactory (0x443164F044D8840479234e00E7aD5bb06b85fC78) {
    +++ description: None
      values.$upgradeCount:
+        1
    }
```

```diff
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      values.$upgradeCount:
+        1
    }
```

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      values.$upgradeCount:
+        1
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.$upgradeCount:
+        1
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      values.$upgradeCount:
+        1
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      values.$upgradeCount:
+        1
    }
```

Generated with discovered.json: 0x4a7e0bffcbc07ae1fd4fea7bceefb7ca61b12c0e

# Diff at Wed, 21 Aug 2024 10:06:37 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@2f6dde3357bf5d79196b6e94f79d853a6c4ec72b block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract DelayedWETH (0x0eCe16401A80551345bB672f177f51A8755FF775) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","via":[]}]
    }
```

```diff
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","via":[]}]
    }
```

```diff
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","via":[]}]
    }
```

```diff
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","via":[]}]
    }
```

```diff
    contract DisputeGameFactory (0x443164F044D8840479234e00E7aD5bb06b85fC78) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","via":[]}]
    }
```

```diff
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","via":[]}]
    }
```

```diff
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","via":[]}]
    }
```

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions:
+        [{"permission":"configure","target":"0xCf06c459AE59d4f47469BcE535afC3485Ce89dBf","via":[]},{"permission":"upgrade","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","via":[]}]
    }
```

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component.
      assignedPermissions:
-        {"upgrade":["0x0eCe16401A80551345bB672f177f51A8755FF775","0x16193e14197c10109F3e81b938153A04A2a00190","0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b","0x2AD84AbD52050956AcC9c490D024b821A59e3FB6","0x443164F044D8840479234e00E7aD5bb06b85fC78","0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f","0x5A0492D20D984eE904E46E6Ff24572bc755abb28","0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C","0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A","0xcbF423525a5471Fc5037a5397F99f6F09fe41379"],"configure":["0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"]}
      issuedPermissions:
+        [{"permission":"configure","target":"0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574","via":[]}]
      receivedPermissions:
+        [{"permission":"configure","target":"0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a","via":[]},{"permission":"upgrade","target":"0x0eCe16401A80551345bB672f177f51A8755FF775","via":[]},{"permission":"upgrade","target":"0x16193e14197c10109F3e81b938153A04A2a00190","via":[]},{"permission":"upgrade","target":"0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b","via":[]},{"permission":"upgrade","target":"0x2AD84AbD52050956AcC9c490D024b821A59e3FB6","via":[]},{"permission":"upgrade","target":"0x443164F044D8840479234e00E7aD5bb06b85fC78","via":[]},{"permission":"upgrade","target":"0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f","via":[]},{"permission":"upgrade","target":"0x5A0492D20D984eE904E46E6Ff24572bc755abb28","via":[]},{"permission":"upgrade","target":"0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C","via":[]},{"permission":"upgrade","target":"0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A","via":[]},{"permission":"upgrade","target":"0xcbF423525a5471Fc5037a5397F99f6F09fe41379","via":[]}]
    }
```

```diff
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","via":[]}]
    }
```

```diff
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"configure","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","via":[]}]
    }
```

```diff
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","via":[]}]
    }
```

```diff
    contract RollupOwnerMultisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: It can act on behalf of 0x9e48d6bBca781c23392Ec459BfB3657C40a794A8, inheriting its permissions.
      assignedPermissions:
-        {"configure":["0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"]}
      receivedPermissions:
+        [{"permission":"configure","target":"0x9e48d6bBca781c23392Ec459BfB3657C40a794A8","via":[]}]
    }
```

Generated with discovered.json: 0x3218d2550f936576f07090522ef35953542c856b

# Diff at Fri, 09 Aug 2024 12:03:05 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bf40aa32f030fd312056ca0ef198c8550467d1d7 block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component.
      assignedPermissions.upgrade.9:
-        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
+        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
      assignedPermissions.upgrade.8:
-        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
+        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
      assignedPermissions.upgrade.5:
-        "0x0eCe16401A80551345bB672f177f51A8755FF775"
+        "0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f"
      assignedPermissions.upgrade.4:
-        "0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A"
+        "0x443164F044D8840479234e00E7aD5bb06b85fC78"
      assignedPermissions.upgrade.3:
-        "0xcbF423525a5471Fc5037a5397F99f6F09fe41379"
+        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
      assignedPermissions.upgrade.2:
-        "0x443164F044D8840479234e00E7aD5bb06b85fC78"
+        "0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"
      assignedPermissions.upgrade.0:
-        "0x2AD84AbD52050956AcC9c490D024b821A59e3FB6"
+        "0x0eCe16401A80551345bB672f177f51A8755FF775"
    }
```

Generated with discovered.json: 0xca8d7289d3c816acaac059031f9de88db9e57f00

# Diff at Fri, 09 Aug 2024 10:13:03 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f0da1d0aab7bc6b3b5e54e7e93480bd98e57035 block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8) {
    +++ description: It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component.
      assignedPermissions.admin:
-        ["0x0eCe16401A80551345bB672f177f51A8755FF775","0x16193e14197c10109F3e81b938153A04A2a00190","0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b","0x2AD84AbD52050956AcC9c490D024b821A59e3FB6","0x443164F044D8840479234e00E7aD5bb06b85fC78","0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f","0x5A0492D20D984eE904E46E6Ff24572bc755abb28","0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C","0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A","0xcbF423525a5471Fc5037a5397F99f6F09fe41379"]
      assignedPermissions.owner:
-        ["0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"]
      assignedPermissions.upgrade:
+        ["0x2AD84AbD52050956AcC9c490D024b821A59e3FB6","0x16193e14197c10109F3e81b938153A04A2a00190","0x443164F044D8840479234e00E7aD5bb06b85fC78","0xcbF423525a5471Fc5037a5397F99f6F09fe41379","0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A","0x0eCe16401A80551345bB672f177f51A8755FF775","0x5A0492D20D984eE904E46E6Ff24572bc755abb28","0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C","0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f","0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b"]
      assignedPermissions.configure:
+        ["0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a"]
    }
```

```diff
    contract RollupOwnerMultisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574) {
    +++ description: It can act on behalf of 0x9e48d6bBca781c23392Ec459BfB3657C40a794A8, inheriting its permissions.
      assignedPermissions.owner:
-        ["0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"]
      assignedPermissions.configure:
+        ["0x9e48d6bBca781c23392Ec459BfB3657C40a794A8"]
      values.$multisigThreshold:
-        "3 of 4 (75%)"
      values.getOwners:
-        ["0xaC79765A73eB9dcBd3c427181E6819902AE25b48","0xB5b01E638CEF6AE50462A487d70005D6fe85eCf2","0xa8AC7D03BEb92Fa3E6030AEB21629D00Ffb66dD7","0x8B6341E18B2DC644cA94eD85173691873626fc7F"]
      values.getThreshold:
-        3
      values.$members:
+        ["0xaC79765A73eB9dcBd3c427181E6819902AE25b48","0xB5b01E638CEF6AE50462A487d70005D6fe85eCf2","0xa8AC7D03BEb92Fa3E6030AEB21629D00Ffb66dD7","0x8B6341E18B2DC644cA94eD85173691873626fc7F"]
      values.$threshold:
+        3
      values.multisigThreshold:
+        "3 of 4 (75%)"
    }
```

Generated with discovered.json: 0x55b4a0d47214ba9d3ed6a08b9a4a4f8ae0f5a598

# Diff at Tue, 30 Jul 2024 11:16:33 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@b2b6471ff62871f4956541f42ec025c356c08f7e block: 20327427
- current block number: 20327427

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20327427 (main branch discovery), not current.

```diff
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      fieldMeta:
+        {"gasLimit":{"severity":"LOW","description":"Gas limit for blocks on L2."}}
    }
```

Generated with discovered.json: 0x408ac4318abf1e3f3f6ac58f375e47a0e10016cd

# Diff at Thu, 18 Jul 2024 14:50:59 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- current block number: 20327427

## Description

Provide description of changes. This section will be preserved.

## Initial discovery

```diff
+   Status: CREATED
    contract PreimageOracle (0x089A4754538B74Ff63Bc6AbeaD7A95973aB03572)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DelayedWETH (0x0eCe16401A80551345bB672f177f51A8755FF775)
    +++ description: None
```

```diff
+   Status: CREATED
    contract PermissionedDisputeGame (0x15b689D90a62C3F7380054C8867b7e7f17Fa7F4B)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DataAvailabilityChallenge (0x16193e14197c10109F3e81b938153A04A2a00190)
    +++ description: None
```

```diff
+   Status: CREATED
    contract MIPS (0x253DdBb3549e0CEFaaaA7f71BE502C5b94771dDc)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0x28d56C3BBbe4807c19Cc81E6D5207Fb681C3726b)
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0x2AD84AbD52050956AcC9c490D024b821A59e3FB6)
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
```

```diff
+   Status: CREATED
    contract DisputeGameFactory (0x443164F044D8840479234e00E7aD5bb06b85fC78)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0x515A0c8b1d9574C65EA1924eCd767B1d9b6AC32f)
    +++ description: None
```

```diff
+   Status: CREATED
    contract FaultDisputeGame (0x56c7D88ee46BfD6cab37508E2e39e985a68007a4)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0x5A0492D20D984eE904E46E6Ff24572bc755abb28)
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
```

```diff
+   Status: CREATED
    contract SystemConfig (0x6E99cdE188DAAFeEcb6eD8AC28B98dE4c8eE5D6C)
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x702dF90E92A6841c9013faE6D724ddFA8F141d5C)
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x9e48d6bBca781c23392Ec459BfB3657C40a794A8)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismPortal (0xBC2bEDA4ce7A1f40aa458322A33B44081b2F545A)
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
```

```diff
+   Status: CREATED
    contract AddressManager (0xBdF852e2cc26Ea3C2dee7b493B1Fc12dA406175a)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SuperchainConfig (0xcbF423525a5471Fc5037a5397F99f6F09fe41379)
    +++ description: None
```

```diff
+   Status: CREATED
    contract RollupOwnerMultisig (0xfF75Bd7672b79f2562fAf98D488bbb3Db1cD1574)
    +++ description: None
```
