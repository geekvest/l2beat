Generated with discovered.json: 0x686d0600792f2526b0644c1121e40e112353e821

# Diff at Mon, 14 Jul 2025 12:47:08 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9f4300dad2f3d080cd56fa311d4a848556c74e72 block: 22438006
- current block number: 22438006

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22438006 (main branch discovery), not current.

```diff
    contract GnosisSafe (0x0897316DFE7141DB1E182551c3e8077cf5dd9695) {
    +++ description: None
      address:
-        "0x0897316DFE7141DB1E182551c3e8077cf5dd9695"
+        "eth:0x0897316DFE7141DB1E182551c3e8077cf5dd9695"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x541f3cc5772a64f2ba0a47e83236CcE2F089b188"
+        "eth:0x541f3cc5772a64f2ba0a47e83236CcE2F089b188"
      implementationNames.0x0897316DFE7141DB1E182551c3e8077cf5dd9695:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x0897316DFE7141DB1E182551c3e8077cf5dd9695:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    contract GnosisSafe (0x140C0227Cbe493A56868DDF4ea582E92ef3e9744) {
    +++ description: None
      address:
-        "0x140C0227Cbe493A56868DDF4ea582E92ef3e9744"
+        "eth:0x140C0227Cbe493A56868DDF4ea582E92ef3e9744"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x5f39524Ed45091abDF3Caff7399c426D7c5F7F04"
+        "eth:0x5f39524Ed45091abDF3Caff7399c426D7c5F7F04"
      implementationNames.0x140C0227Cbe493A56868DDF4ea582E92ef3e9744:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x140C0227Cbe493A56868DDF4ea582E92ef3e9744:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0x2a7A69daDe8fed5c88b5894392ADc6c42da6d5c7) {
    +++ description: None
      address:
-        "0x2a7A69daDe8fed5c88b5894392ADc6c42da6d5c7"
+        "eth:0x2a7A69daDe8fed5c88b5894392ADc6c42da6d5c7"
    }
```

```diff
    contract DeleteIdentitiesVerifierLookupTable (0x39CcB3b670651a14da8b3835f42924f49C2C5986) {
    +++ description: None
      address:
-        "0x39CcB3b670651a14da8b3835f42924f49C2C5986"
+        "eth:0x39CcB3b670651a14da8b3835f42924f49C2C5986"
      values.initialVerifiers.0:
-        "0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1"
+        "eth:0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1"
      values.initialVerifiers.1:
-        "0x43B68ccBa7FC726540768fD1537c3179283140ed"
+        "eth:0x43B68ccBa7FC726540768fD1537c3179283140ed"
      values.owner:
-        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
+        "eth:0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      implementationNames.0x39CcB3b670651a14da8b3835f42924f49C2C5986:
-        "VerifierLookupTable"
      implementationNames.eth:0x39CcB3b670651a14da8b3835f42924f49C2C5986:
+        "VerifierLookupTable"
    }
```

```diff
    EOA  (0x3b870Ea07b6511475Fa2422eA9DaA74C55Db85Be) {
    +++ description: None
      address:
-        "0x3b870Ea07b6511475Fa2422eA9DaA74C55Db85Be"
+        "eth:0x3b870Ea07b6511475Fa2422eA9DaA74C55Db85Be"
    }
```

```diff
    contract RegisterIdentitiesVerifierLookupTable (0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49) {
    +++ description: None
      address:
-        "0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49"
+        "eth:0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49"
      values.additionalVerifiers.0:
-        "0xFC1c26E964F791f81a33F49D91f79456891AA1c1"
+        "eth:0xFC1c26E964F791f81a33F49D91f79456891AA1c1"
      values.additionalVerifiers.1:
-        "0xE44c83b9e1971A24EC698829297A0C4026B0CeF9"
+        "eth:0xE44c83b9e1971A24EC698829297A0C4026B0CeF9"
      values.initialVerifiers.1:
-        "0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258"
+        "eth:0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258"
      values.owner:
-        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
+        "eth:0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      implementationNames.0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49:
-        "VerifierLookupTable"
      implementationNames.eth:0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49:
+        "VerifierLookupTable"
    }
```

```diff
    contract DeleteVerifierSize100 (0x43B68ccBa7FC726540768fD1537c3179283140ed) {
    +++ description: None
      address:
-        "0x43B68ccBa7FC726540768fD1537c3179283140ed"
+        "eth:0x43B68ccBa7FC726540768fD1537c3179283140ed"
      implementationNames.0x43B68ccBa7FC726540768fD1537c3179283140ed:
-        "Verifier"
      implementationNames.eth:0x43B68ccBa7FC726540768fD1537c3179283140ed:
+        "Verifier"
    }
```

```diff
    EOA  (0x541f3cc5772a64f2ba0a47e83236CcE2F089b188) {
    +++ description: None
      address:
-        "0x541f3cc5772a64f2ba0a47e83236CcE2F089b188"
+        "eth:0x541f3cc5772a64f2ba0a47e83236CcE2F089b188"
    }
```

```diff
    EOA  (0x5f39524Ed45091abDF3Caff7399c426D7c5F7F04) {
    +++ description: None
      address:
-        "0x5f39524Ed45091abDF3Caff7399c426D7c5F7F04"
+        "eth:0x5f39524Ed45091abDF3Caff7399c426D7c5F7F04"
    }
```

```diff
    contract GnosisSafe (0x6BBf4f7478824482F0cE2861d003bf0Ef61CdBD6) {
    +++ description: None
      address:
-        "0x6BBf4f7478824482F0cE2861d003bf0Ef61CdBD6"
+        "eth:0x6BBf4f7478824482F0cE2861d003bf0Ef61CdBD6"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0xB6d1621B770A088C16bfec22bAd00F77D874d011"
+        "eth:0xB6d1621B770A088C16bfec22bAd00F77D874d011"
      values.$members.1:
-        "0x2a7A69daDe8fed5c88b5894392ADc6c42da6d5c7"
+        "eth:0x2a7A69daDe8fed5c88b5894392ADc6c42da6d5c7"
      implementationNames.0x6BBf4f7478824482F0cE2861d003bf0Ef61CdBD6:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x6BBf4f7478824482F0cE2861d003bf0Ef61CdBD6:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0x6EbD1dc80A9D608b7bC0F204E14909E7fFd25421) {
    +++ description: None
      address:
-        "0x6EbD1dc80A9D608b7bC0F204E14909E7fFd25421"
+        "eth:0x6EbD1dc80A9D608b7bC0F204E14909E7fFd25421"
    }
```

```diff
    EOA  (0x79b998ded1f4503CE3A0A76993c72a65449f4590) {
    +++ description: None
      address:
-        "0x79b998ded1f4503CE3A0A76993c72a65449f4590"
+        "eth:0x79b998ded1f4503CE3A0A76993c72a65449f4590"
    }
```

```diff
    contract RegisterVerifierSize100 (0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258) {
    +++ description: None
      address:
-        "0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258"
+        "eth:0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258"
      implementationNames.0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258:
-        "Verifier"
      implementationNames.eth:0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258:
+        "Verifier"
    }
```

```diff
    contract GnosisSafe (0xb67ac19693fB89880Ca5873f6a890E865b259c26) {
    +++ description: None
      address:
-        "0xb67ac19693fB89880Ca5873f6a890E865b259c26"
+        "eth:0xb67ac19693fB89880Ca5873f6a890E865b259c26"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x79b998ded1f4503CE3A0A76993c72a65449f4590"
+        "eth:0x79b998ded1f4503CE3A0A76993c72a65449f4590"
      values.$members.1:
-        "0x6EbD1dc80A9D608b7bC0F204E14909E7fFd25421"
+        "eth:0x6EbD1dc80A9D608b7bC0F204E14909E7fFd25421"
      implementationNames.0xb67ac19693fB89880Ca5873f6a890E865b259c26:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0xb67ac19693fB89880Ca5873f6a890E865b259c26:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0xB6d1621B770A088C16bfec22bAd00F77D874d011) {
    +++ description: None
      address:
-        "0xB6d1621B770A088C16bfec22bAd00F77D874d011"
+        "eth:0xB6d1621B770A088C16bfec22bAd00F77D874d011"
    }
```

```diff
    contract GnosisSafe (0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77) {
    +++ description: None
      address:
-        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
+        "eth:0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x0897316DFE7141DB1E182551c3e8077cf5dd9695"
+        "eth:0x0897316DFE7141DB1E182551c3e8077cf5dd9695"
      values.$members.1:
-        "0xb67ac19693fB89880Ca5873f6a890E865b259c26"
+        "eth:0xb67ac19693fB89880Ca5873f6a890E865b259c26"
      values.$members.2:
-        "0xF0fCdb037718E1B2b52f109Ae776713F9c1f730c"
+        "eth:0xF0fCdb037718E1B2b52f109Ae776713F9c1f730c"
      values.$members.3:
-        "0x140C0227Cbe493A56868DDF4ea582E92ef3e9744"
+        "eth:0x140C0227Cbe493A56868DDF4ea582E92ef3e9744"
      values.$members.4:
-        "0x6BBf4f7478824482F0cE2861d003bf0Ef61CdBD6"
+        "eth:0x6BBf4f7478824482F0cE2861d003bf0Ef61CdBD6"
      implementationNames.0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    contract DeleteVerifierSize10 (0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1) {
    +++ description: None
      address:
-        "0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1"
+        "eth:0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1"
      implementationNames.0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1:
-        "Verifier"
      implementationNames.eth:0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1:
+        "Verifier"
    }
```

```diff
    contract SemaphoreVerifier (0xcDBbcd1cb0B642F8E324aB29C73A967b0C80Bad5) {
    +++ description: None
      address:
-        "0xcDBbcd1cb0B642F8E324aB29C73A967b0C80Bad5"
+        "eth:0xcDBbcd1cb0B642F8E324aB29C73A967b0C80Bad5"
      implementationNames.0xcDBbcd1cb0B642F8E324aB29C73A967b0C80Bad5:
-        "SemaphoreVerifier"
      implementationNames.eth:0xcDBbcd1cb0B642F8E324aB29C73A967b0C80Bad5:
+        "SemaphoreVerifier"
    }
```

```diff
    EOA  (0xE2DA046340e00264C4F0443243a0565007AE08AC) {
    +++ description: None
      address:
-        "0xE2DA046340e00264C4F0443243a0565007AE08AC"
+        "eth:0xE2DA046340e00264C4F0443243a0565007AE08AC"
    }
```

```diff
    contract RegisterVerifierSize1200 (0xE44c83b9e1971A24EC698829297A0C4026B0CeF9) {
    +++ description: None
      address:
-        "0xE44c83b9e1971A24EC698829297A0C4026B0CeF9"
+        "eth:0xE44c83b9e1971A24EC698829297A0C4026B0CeF9"
      implementationNames.0xE44c83b9e1971A24EC698829297A0C4026B0CeF9:
-        "Verifier"
      implementationNames.eth:0xE44c83b9e1971A24EC698829297A0C4026B0CeF9:
+        "Verifier"
    }
```

```diff
    contract GnosisSafe (0xF0fCdb037718E1B2b52f109Ae776713F9c1f730c) {
    +++ description: None
      address:
-        "0xF0fCdb037718E1B2b52f109Ae776713F9c1f730c"
+        "eth:0xF0fCdb037718E1B2b52f109Ae776713F9c1f730c"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x3b870Ea07b6511475Fa2422eA9DaA74C55Db85Be"
+        "eth:0x3b870Ea07b6511475Fa2422eA9DaA74C55Db85Be"
      implementationNames.0xF0fCdb037718E1B2b52f109Ae776713F9c1f730c:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0xF0fCdb037718E1B2b52f109Ae776713F9c1f730c:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
      address:
-        "0xf7134CE138832c1456F2a91D64621eE90c2bddEa"
+        "eth:0xf7134CE138832c1456F2a91D64621eE90c2bddEa"
      values.$admin:
-        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
+        "eth:0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
      values.$implementation:
-        "0x521e8FB3A32Ea44237DC8b1E506dd78accFDf8Bd"
+        "eth:0x521e8FB3A32Ea44237DC8b1E506dd78accFDf8Bd"
      values.$pastUpgrades.0.2.0:
-        "0xa3cD15EBed6075E33a54483C59818bC43D57c556"
+        "eth:0xa3cD15EBed6075E33a54483C59818bC43D57c556"
      values.$pastUpgrades.1.2.0:
-        "0x2Ad412A1dF96434Eed0779D2dB4A8694a06132f8"
+        "eth:0x2Ad412A1dF96434Eed0779D2dB4A8694a06132f8"
      values.$pastUpgrades.2.2.0:
-        "0x521e8FB3A32Ea44237DC8b1E506dd78accFDf8Bd"
+        "eth:0x521e8FB3A32Ea44237DC8b1E506dd78accFDf8Bd"
      values.getDeleteIdentitiesVerifierLookupTableAddress:
-        "0x39CcB3b670651a14da8b3835f42924f49C2C5986"
+        "eth:0x39CcB3b670651a14da8b3835f42924f49C2C5986"
      values.getRegisterIdentitiesVerifierLookupTableAddress:
-        "0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49"
+        "eth:0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49"
      values.getSemaphoreVerifierAddress:
-        "0xcDBbcd1cb0B642F8E324aB29C73A967b0C80Bad5"
+        "eth:0xcDBbcd1cb0B642F8E324aB29C73A967b0C80Bad5"
+++ description: Can call functions (manage identities) in the WorldIdIdentityManager2 implementation
      values.identityOperator:
-        "0xE2DA046340e00264C4F0443243a0565007AE08AC"
+        "eth:0xE2DA046340e00264C4F0443243a0565007AE08AC"
      values.owner:
-        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
+        "eth:0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      implementationNames.0xf7134CE138832c1456F2a91D64621eE90c2bddEa:
-        "WorldIDIdentityManager"
      implementationNames.0x521e8FB3A32Ea44237DC8b1E506dd78accFDf8Bd:
-        "WorldIDIdentityManagerImplV2"
      implementationNames.eth:0xf7134CE138832c1456F2a91D64621eE90c2bddEa:
+        "WorldIDIdentityManager"
      implementationNames.eth:0x521e8FB3A32Ea44237DC8b1E506dd78accFDf8Bd:
+        "WorldIDIdentityManagerImplV2"
    }
```

```diff
    contract RegisterVerifierSize600 (0xFC1c26E964F791f81a33F49D91f79456891AA1c1) {
    +++ description: None
      address:
-        "0xFC1c26E964F791f81a33F49D91f79456891AA1c1"
+        "eth:0xFC1c26E964F791f81a33F49D91f79456891AA1c1"
      implementationNames.0xFC1c26E964F791f81a33F49D91f79456891AA1c1:
-        "Verifier"
      implementationNames.eth:0xFC1c26E964F791f81a33F49D91f79456891AA1c1:
+        "Verifier"
    }
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x0897316DFE7141DB1E182551c3e8077cf5dd9695)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x140C0227Cbe493A56868DDF4ea582E92ef3e9744)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DeleteIdentitiesVerifierLookupTable (0x39CcB3b670651a14da8b3835f42924f49C2C5986)
    +++ description: None
```

```diff
+   Status: CREATED
    contract RegisterIdentitiesVerifierLookupTable (0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DeleteVerifierSize100 (0x43B68ccBa7FC726540768fD1537c3179283140ed)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x6BBf4f7478824482F0cE2861d003bf0Ef61CdBD6)
    +++ description: None
```

```diff
+   Status: CREATED
    contract RegisterVerifierSize100 (0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xb67ac19693fB89880Ca5873f6a890E865b259c26)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DeleteVerifierSize10 (0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SemaphoreVerifier (0xcDBbcd1cb0B642F8E324aB29C73A967b0C80Bad5)
    +++ description: None
```

```diff
+   Status: CREATED
    contract RegisterVerifierSize1200 (0xE44c83b9e1971A24EC698829297A0C4026B0CeF9)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xF0fCdb037718E1B2b52f109Ae776713F9c1f730c)
    +++ description: None
```

```diff
+   Status: CREATED
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa)
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
```

```diff
+   Status: CREATED
    contract RegisterVerifierSize600 (0xFC1c26E964F791f81a33F49D91f79456891AA1c1)
    +++ description: None
```

Generated with discovered.json: 0x530040c0e8239d66d75d114ba3de6d05219ba306

# Diff at Fri, 04 Jul 2025 12:19:28 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f56dc47fe915564d4555300304da4d3bcbc087f block: 22438006
- current block number: 22438006

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22438006 (main branch discovery), not current.

```diff
    contract GnosisSafe (0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xf7134CE138832c1456F2a91D64621eE90c2bddEa"
+        "eth:0xf7134CE138832c1456F2a91D64621eE90c2bddEa"
    }
```

Generated with discovered.json: 0x59b8e7c66c6178ae200c2bd8f47c9dfcfb3219de

# Diff at Fri, 23 May 2025 09:41:16 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 22438006
- current block number: 22438006

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22438006 (main branch discovery), not current.

```diff
    contract GnosisSafe (0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77) {
    +++ description: None
      receivedPermissions.0.role:
+        "admin"
    }
```

Generated with discovered.json: 0xc4d732713fc74a2923c7c91855b30c2747e3cb2d

# Diff at Thu, 08 May 2025 10:05:19 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@8e1926142ab0c57cc131de4d8da307e13d9af54d block: 22418260
- current block number: 22438006

## Description

MS member change.

## Watched changes

```diff
    contract GnosisSafe (0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77) {
    +++ description: None
      values.$members.5:
-        "0xb67ac19693fB89880Ca5873f6a890E865b259c26"
      values.$members.4:
-        "0x6BBf4f7478824482F0cE2861d003bf0Ef61CdBD6"
+        "0xb67ac19693fB89880Ca5873f6a890E865b259c26"
      values.$members.3:
-        "0xF1d0E74D4a54aBfeA3777d89cef7f7445acd992A"
+        "0x6BBf4f7478824482F0cE2861d003bf0Ef61CdBD6"
      values.multisigThreshold:
-        "4 of 6 (67%)"
+        "4 of 5 (80%)"
    }
```

```diff
-   Status: DELETED
    contract GnosisSafe (0xF1d0E74D4a54aBfeA3777d89cef7f7445acd992A)
    +++ description: None
```

## Source code changes

```diff
.../GnosisSafe.sol => /dev/null                    | 953 ---------------------
 .../GnosisSafeProxy.p.sol => /dev/null             |  35 -
 2 files changed, 988 deletions(-)
```

Generated with discovered.json: 0x6df0c7e4731464de15fe1e1f2fe6894c5ea70823

# Diff at Mon, 05 May 2025 14:54:32 GMT:

- author: Sergey Shemyakov (<sergey.shemyakov@l2beat.com>)
- comparing to: main@277ef8f5adf45205d5b920c1ebfc0f7db8d19aff block: 22208595
- current block number: 22418260

## Description

Added a known 4/6 multisig as the second member of another known 1/2 multisig.

## Watched changes

```diff
    contract GnosisSafe (0xF1d0E74D4a54aBfeA3777d89cef7f7445acd992A) {
    +++ description: None
      values.$members.1:
+        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
      values.multisigThreshold:
-        "1 of 1 (100%)"
+        "1 of 2 (50%)"
    }
```

Generated with discovered.json: 0xb7e671e8630b0eb8b974b8f85599fca8f6599843

# Diff at Tue, 29 Apr 2025 08:19:25 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 22208595
- current block number: 22208595

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22208595 (main branch discovery), not current.

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77","via":[]}]
    }
```

Generated with discovered.json: 0x754c15aad56c5926a59d08f345d95ddf87a65851

# Diff at Sun, 06 Apr 2025 08:11:53 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@02dea11f7707601873600e275c4e2b7792c1a190 block: 22166651
- current block number: 22208595

## Description

owner/admin changes.

## Watched changes

```diff
    contract DeleteIdentitiesVerifierLookupTable (0x39CcB3b670651a14da8b3835f42924f49C2C5986) {
    +++ description: None
      values.owner:
-        "0x96d55BD9c8C4706FED243c1e15825FF7854920fA"
+        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
      values.pendingOwner:
-        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
+        "0x0000000000000000000000000000000000000000"
    }
```

```diff
    contract RegisterIdentitiesVerifierLookupTable (0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49) {
    +++ description: None
      values.owner:
-        "0x96d55BD9c8C4706FED243c1e15825FF7854920fA"
+        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
      values.pendingOwner:
-        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
+        "0x0000000000000000000000000000000000000000"
    }
```

```diff
    contract GnosisSafe (0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77) {
    +++ description: None
      receivedPermissions:
+        [{"permission":"upgrade","from":"0xf7134CE138832c1456F2a91D64621eE90c2bddEa"}]
    }
```

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
      issuedPermissions.0.to:
-        "0x96d55BD9c8C4706FED243c1e15825FF7854920fA"
+        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
      values.$admin:
-        "0x96d55BD9c8C4706FED243c1e15825FF7854920fA"
+        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
      values.owner:
-        "0x96d55BD9c8C4706FED243c1e15825FF7854920fA"
+        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
      values.pendingOwner:
-        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
+        "0x0000000000000000000000000000000000000000"
    }
```

Generated with discovered.json: 0x399f8835567250b9edd2110bf8da23f343a0a2f2

# Diff at Mon, 31 Mar 2025 11:38:28 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@71ffebe835be10b6d5d09ef65aa19b910de8a2ec block: 21845003
- current block number: 22166651

## Description

New pending owners: moving from EOA to GnosisSafe.

## Watched changes

```diff
    contract DeleteIdentitiesVerifierLookupTable (0x39CcB3b670651a14da8b3835f42924f49C2C5986) {
    +++ description: None
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
    }
```

```diff
    contract RegisterIdentitiesVerifierLookupTable (0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49) {
    +++ description: None
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
    }
```

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77"
    }
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x0897316DFE7141DB1E182551c3e8077cf5dd9695)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x140C0227Cbe493A56868DDF4ea582E92ef3e9744)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x6BBf4f7478824482F0cE2861d003bf0Ef61CdBD6)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xb67ac19693fB89880Ca5873f6a890E865b259c26)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xc534a745bFfaF9466Ed7B47fA23B0177b99A3e77)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xF0fCdb037718E1B2b52f109Ae776713F9c1f730c)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xF1d0E74D4a54aBfeA3777d89cef7f7445acd992A)
    +++ description: None
```

## Source code changes

```diff
.../GnosisSafe.sol                                 | 953 +++++++++++++++++++++
 .../GnosisSafeProxy.p.sol                          |  35 +
 .../GnosisSafe.sol                                 | 953 +++++++++++++++++++++
 .../GnosisSafeProxy.p.sol                          |  35 +
 .../GnosisSafe.sol                                 | 953 +++++++++++++++++++++
 .../GnosisSafeProxy.p.sol                          |  35 +
 .../GnosisSafe.sol                                 | 953 +++++++++++++++++++++
 .../GnosisSafeProxy.p.sol                          |  35 +
 .../GnosisSafe.sol                                 | 953 +++++++++++++++++++++
 .../GnosisSafeProxy.p.sol                          |  35 +
 .../GnosisSafe.sol                                 | 953 +++++++++++++++++++++
 .../GnosisSafeProxy.p.sol                          |  35 +
 .../GnosisSafe.sol                                 | 953 +++++++++++++++++++++
 .../GnosisSafeProxy.p.sol                          |  35 +
 14 files changed, 6916 insertions(+)
```

Generated with discovered.json: 0x62c4ad45e398d8990e8d437573657a015d57b469

# Diff at Tue, 04 Mar 2025 10:40:13 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 21845003
- current block number: 21845003

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21845003 (main branch discovery), not current.

```diff
    contract DeleteIdentitiesVerifierLookupTable (0x39CcB3b670651a14da8b3835f42924f49C2C5986) {
    +++ description: None
      sinceBlock:
+        18987060
    }
```

```diff
    contract RegisterIdentitiesVerifierLookupTable (0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49) {
    +++ description: None
      sinceBlock:
+        17584527
    }
```

```diff
    contract DeleteVerifierSize100 (0x43B68ccBa7FC726540768fD1537c3179283140ed) {
    +++ description: None
      sinceBlock:
+        18987089
    }
```

```diff
    contract RegisterVerifierSize100 (0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258) {
    +++ description: None
      sinceBlock:
+        18967237
    }
```

```diff
    contract DeleteVerifierSize10 (0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1) {
    +++ description: None
      sinceBlock:
+        18987084
    }
```

```diff
    contract SemaphoreVerifier (0xcDBbcd1cb0B642F8E324aB29C73A967b0C80Bad5) {
    +++ description: None
      sinceBlock:
+        17584544
    }
```

```diff
    contract RegisterVerifierSize1200 (0xE44c83b9e1971A24EC698829297A0C4026B0CeF9) {
    +++ description: None
      sinceBlock:
+        18967248
    }
```

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
      sinceBlock:
+        17636832
    }
```

```diff
    contract RegisterVerifierSize600 (0xFC1c26E964F791f81a33F49D91f79456891AA1c1) {
    +++ description: None
      sinceBlock:
+        18967244
    }
```

Generated with discovered.json: 0x7c9073b2478d0121e3cf233495042b32825b4004

# Diff at Fri, 14 Feb 2025 13:29:52 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@166dc249bfa78df836dc8592e4a420bb82432150 block: 20922333
- current block number: 21845003

## Description

WorldIdIdentityManager2 admin, owner change (EOA).

## Watched changes

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
      issuedPermissions.0.to:
-        "0x9ad4EFAF9E326c17c3A7be6F5D167843Af0eb30A"
+        "0x96d55BD9c8C4706FED243c1e15825FF7854920fA"
      values.$admin:
-        "0x9ad4EFAF9E326c17c3A7be6F5D167843Af0eb30A"
+        "0x96d55BD9c8C4706FED243c1e15825FF7854920fA"
      values.owner:
-        "0x9ad4EFAF9E326c17c3A7be6F5D167843Af0eb30A"
+        "0x96d55BD9c8C4706FED243c1e15825FF7854920fA"
    }
```

Generated with discovered.json: 0xef2da8c67b30bebcbc8f5c89fe5d1ad362505ddb

# Diff at Mon, 20 Jan 2025 11:10:21 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 20922333
- current block number: 20922333

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20922333 (main branch discovery), not current.

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
      issuedPermissions.0.target:
-        "0x9ad4EFAF9E326c17c3A7be6F5D167843Af0eb30A"
      issuedPermissions.0.to:
+        "0x9ad4EFAF9E326c17c3A7be6F5D167843Af0eb30A"
    }
```

Generated with discovered.json: 0xe57cdfb253e9f9f96688d6d9863edf4538e94063

# Diff at Mon, 21 Oct 2024 12:50:14 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e660599f23a07618fe949a07be1f516ce44f1914 block: 20922333
- current block number: 20922333

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20922333 (main branch discovery), not current.

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
      descriptions:
-        ["Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs."]
      description:
+        "Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs."
    }
```

Generated with discovered.json: 0x5f2e4f8fabff5372f3bcb234859ea159a0784373

# Diff at Mon, 21 Oct 2024 11:12:04 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8895d33866f5665c4c710f4ddaa32bfa63cc3c78 block: 20922333
- current block number: 20922333

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20922333 (main branch discovery), not current.

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
      values.$pastUpgrades.2.2:
+        ["0x521e8FB3A32Ea44237DC8b1E506dd78accFDf8Bd"]
      values.$pastUpgrades.2.1:
-        ["0x521e8FB3A32Ea44237DC8b1E506dd78accFDf8Bd"]
+        "0xda23d7a260d4bee338a99c4c9c1cd82f329f2ac151286487c66681ea4a0ae5e6"
      values.$pastUpgrades.1.2:
+        ["0x2Ad412A1dF96434Eed0779D2dB4A8694a06132f8"]
      values.$pastUpgrades.1.1:
-        ["0x2Ad412A1dF96434Eed0779D2dB4A8694a06132f8"]
+        "0xaa68dea1046df37d3b0f21db95cfaa44fc4e1d01dcc523379270251989283dcb"
      values.$pastUpgrades.0.2:
+        ["0xa3cD15EBed6075E33a54483C59818bC43D57c556"]
      values.$pastUpgrades.0.1:
-        ["0xa3cD15EBed6075E33a54483C59818bC43D57c556"]
+        "0x0af02107fe8622db5d846e8d391b550adba8fd06dd3382b7296f5168b6308be3"
    }
```

Generated with discovered.json: 0x5bbd3c94b69fded49e2906cf815436af4c48c01a

# Diff at Mon, 14 Oct 2024 10:57:53 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1afc77ff111ceb0970e7d09efcc7b2f376b0c281 block: 20922333
- current block number: 20922333

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20922333 (main branch discovery), not current.

```diff
    contract DeleteIdentitiesVerifierLookupTable (0x39CcB3b670651a14da8b3835f42924f49C2C5986) {
    +++ description: None
      sourceHashes:
+        ["0x39eb56f7878719eefdfb5cc208bbd36b80989adf0ba642e7d2359973d08c8934"]
    }
```

```diff
    contract RegisterIdentitiesVerifierLookupTable (0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49) {
    +++ description: None
      sourceHashes:
+        ["0x39eb56f7878719eefdfb5cc208bbd36b80989adf0ba642e7d2359973d08c8934"]
    }
```

```diff
    contract DeleteVerifierSize100 (0x43B68ccBa7FC726540768fD1537c3179283140ed) {
    +++ description: None
      sourceHashes:
+        ["0xc2565a490312be5d6a5b12bcb700c6fa795caab49384ab6d23343096134df95f"]
    }
```

```diff
    contract RegisterVerifierSize100 (0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258) {
    +++ description: None
      sourceHashes:
+        ["0x7c8adbb6efe5b3350d779e102d5ae78fd639c4f8ceefafea77344463d5d8cc94"]
    }
```

```diff
    contract DeleteVerifierSize10 (0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1) {
    +++ description: None
      sourceHashes:
+        ["0x82f68854d52503cd6c6f6ff3c97b47515d8e5b65abc2950508e18059dff0692f"]
    }
```

```diff
    contract SemaphoreVerifier (0xcDBbcd1cb0B642F8E324aB29C73A967b0C80Bad5) {
    +++ description: None
      sourceHashes:
+        ["0xb9149eadedcff671edd3913162a49203e7f35036cb983413e363562d5974f4b3"]
    }
```

```diff
    contract RegisterVerifierSize1200 (0xE44c83b9e1971A24EC698829297A0C4026B0CeF9) {
    +++ description: None
      sourceHashes:
+        ["0xbd34cc0d432d6d6834f925e6553abb9510b448b0eb25d2e40263813ad71f6f86"]
    }
```

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
      sourceHashes:
+        ["0x3821412640509152c25bca5507532d7472607cede582ce50994edf3261f0ea9c","0xcac9e734a4cccc40bec37b5168f307cca5054c69434c136f131ee1ee0a6a555d"]
    }
```

```diff
    contract RegisterVerifierSize600 (0xFC1c26E964F791f81a33F49D91f79456891AA1c1) {
    +++ description: None
      sourceHashes:
+        ["0xca7e21152b6ce21c64fdb15e8d8e9ac03809d3f499f232454a62e8060acbc3b9"]
    }
```

Generated with discovered.json: 0xc090690b6d65a34a13d7d0538b596ee5b61993d7

# Diff at Tue, 08 Oct 2024 17:23:55 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@bca55174129419533cd4173605c170ea99ac6f98 block: 20432514
- current block number: 20922333

## Description

New identityOperator EOA.

## Watched changes

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
+++ description: Can call functions (manage identities) in the WorldIdIdentityManager2 implementation
      values.identityOperator:
-        "0x9ad4EFAF9E326c17c3A7be6F5D167843Af0eb30A"
+        "0xE2DA046340e00264C4F0443243a0565007AE08AC"
    }
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20432514 (main branch discovery), not current.

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs.
      descriptions:
+        ["Does what it says: Manages identities for Worldcoin. The identityOperator can register or delete identities by submitting zk proofs."]
      fieldMeta:
+        {"identityOperator":{"description":"Can call functions (manage identities) in the WorldIdIdentityManager2 implementation"}}
    }
```

Generated with discovered.json: 0x96a26211df9aa68ac085af198ba101729d6b20bd

# Diff at Tue, 01 Oct 2024 11:11:50 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bd754dc73c66120164006054f8d25c5fae9cd910 block: 20432514
- current block number: 20432514

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20432514 (main branch discovery), not current.

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: None
      values.$pastUpgrades:
+        [["2023-07-06T19:19:11.000Z",["0xa3cD15EBed6075E33a54483C59818bC43D57c556"]],["2023-08-18T17:12:23.000Z",["0x2Ad412A1dF96434Eed0779D2dB4A8694a06132f8"]],["2024-01-12T00:00:23.000Z",["0x521e8FB3A32Ea44237DC8b1E506dd78accFDf8Bd"]]]
    }
```

Generated with discovered.json: 0x2e81c05e7db49aa9410691675b939ba0db695cff

# Diff at Fri, 23 Aug 2024 09:56:22 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@67597c7d6c810bc726594446890178150240711e block: 20432514
- current block number: 20432514

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20432514 (main branch discovery), not current.

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: None
      values.$upgradeCount:
+        3
    }
```

Generated with discovered.json: 0x3a4b62d77db367c176ad873c3200e8296ef4b785

# Diff at Wed, 21 Aug 2024 10:06:33 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@2f6dde3357bf5d79196b6e94f79d853a6c4ec72b block: 20432514
- current block number: 20432514

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20432514 (main branch discovery), not current.

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x9ad4EFAF9E326c17c3A7be6F5D167843Af0eb30A","via":[]}]
    }
```

Generated with discovered.json: 0x3759828a64294cbc3e7886ec2441fb2de28e4ea2

# Diff at Wed, 29 May 2024 15:05:45 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@d0877009edde2713b2b4f20a593b40156f5de045 block: 19831219
- current block number: 19976298

## Description

Config related: Owner is upgrade admin.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19831219 (main branch discovery), not current.

```diff
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa) {
    +++ description: None
      upgradeability.admin:
-        "0x0000000000000000000000000000000000000000"
+        "0x9ad4EFAF9E326c17c3A7be6F5D167843Af0eb30A"
    }
```

Generated with discovered.json: 0x2ba241edec2c6159161163d4edcd345d773b403a

# Diff at Thu, 09 May 2024 08:14:02 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- current block number: 19831219

## Description

Added worldcoin discovery. In particular this is needed for the ZK Catalog.

## Initial discovery

```diff
+   Status: CREATED
    contract DeleteIdentitiesVerifierLookupTable (0x39CcB3b670651a14da8b3835f42924f49C2C5986)
    +++ description: None
```

```diff
+   Status: CREATED
    contract RegisterIdentitiesVerifierLookupTable (0x4055B6d4018e92e4d000865e61e87B57A4E5Ab49)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DeleteVerifierSize100 (0x43B68ccBa7FC726540768fD1537c3179283140ed)
    +++ description: None
```

```diff
+   Status: CREATED
    contract RegisterVerifierSize100 (0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DeleteVerifierSize10 (0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SemaphoreVerifier (0xcDBbcd1cb0B642F8E324aB29C73A967b0C80Bad5)
    +++ description: None
```

```diff
+   Status: CREATED
    contract RegisterVerifierSize1200 (0xE44c83b9e1971A24EC698829297A0C4026B0CeF9)
    +++ description: None
```

```diff
+   Status: CREATED
    contract WorldIdIdentityManager2 (0xf7134CE138832c1456F2a91D64621eE90c2bddEa)
    +++ description: None
```

```diff
+   Status: CREATED
    contract RegisterVerifierSize600 (0xFC1c26E964F791f81a33F49D91f79456891AA1c1)
    +++ description: None
```
