export type PreSale = {
  "version": "0.1.0",
  "name": "pre_sale",
  "instructions": [
    {
      "name": "makeDirectSolTransfer",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "myAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "data",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "myAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

export const IDLPRE: PreSale = {
  "version": "0.1.0",
  "name": "pre_sale",
  "instructions": [
    {
      "name": "makeDirectSolTransfer",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "myAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "data",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "myAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "u64"
          }
        ]
      }
    }
  ]
};



export type TokenSale = {
  "version": "0.1.0",
  "name": "token_sale",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "saleToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rate",
          "type": "u64"
        },
        {
          "name": "totalTokensForSale",
          "type": "u64"
        },
        {
          "name": "firstStageEndTime",
          "type": "i64"
        },
        {
          "name": "unlockingFee",
          "type": "u64"
        },
        {
          "name": "unlockingTimes",
          "type": {
            "array": [
              "i64",
              4
            ]
          }
        }
      ]
    },
    {
      "name": "startSale",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "stopSale",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "startUnlocking",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "unlockingFee",
          "type": "u64"
        },
        {
          "name": "unlockingTimes",
          "type": {
            "array": [
              "i64",
              4
            ]
          }
        }
      ]
    },
    {
      "name": "stopUnlocking",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "buyTokens",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "saleTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawTokens",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "saleTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "sale",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "rate",
            "type": "u64"
          },
          {
            "name": "totalTokensForSale",
            "type": "u64"
          },
          {
            "name": "stagesEndTime",
            "type": "i64"
          },
          {
            "name": "unlockingFee",
            "type": "u64"
          },
          {
            "name": "unlockingTimes",
            "type": {
              "array": [
                "i64",
                4
              ]
            }
          },
          {
            "name": "saleStatus",
            "type": "bool"
          },
          {
            "name": "unlockingStatus",
            "type": "bool"
          },
          {
            "name": "totalTokensSold",
            "type": "u64"
          },
          {
            "name": "buyers",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "buyer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "exists",
            "type": "bool"
          },
          {
            "name": "isUnlocked",
            "type": {
              "array": [
                "bool",
                4
              ]
            }
          },
          {
            "name": "unlockedAmount",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "SaleNotActive",
      "msg": "The sale is not active."
    },
    {
      "code": 6001,
      "name": "NotEnoughTokens",
      "msg": "Not enough tokens available for sale."
    },
    {
      "code": 6002,
      "name": "UnlockingNotActive",
      "msg": "Unlocking of tokens is not active."
    },
    {
      "code": 6003,
      "name": "NoTokensToUnlock",
      "msg": "You have no tokens to unlock."
    },
    {
      "code": 6004,
      "name": "Overflow",
      "msg": "Operation caused an overflow."
    }
  ]
};

export const IDLTOK: TokenSale = {
  "version": "0.1.0",
  "name": "token_sale",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "saleToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rate",
          "type": "u64"
        },
        {
          "name": "totalTokensForSale",
          "type": "u64"
        },
        {
          "name": "firstStageEndTime",
          "type": "i64"
        },
        {
          "name": "unlockingFee",
          "type": "u64"
        },
        {
          "name": "unlockingTimes",
          "type": {
            "array": [
              "i64",
              4
            ]
          }
        }
      ]
    },
    {
      "name": "startSale",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "stopSale",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "startUnlocking",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "unlockingFee",
          "type": "u64"
        },
        {
          "name": "unlockingTimes",
          "type": {
            "array": [
              "i64",
              4
            ]
          }
        }
      ]
    },
    {
      "name": "stopUnlocking",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "buyTokens",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "saleTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawTokens",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "saleTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "sale",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "rate",
            "type": "u64"
          },
          {
            "name": "totalTokensForSale",
            "type": "u64"
          },
          {
            "name": "stagesEndTime",
            "type": "i64"
          },
          {
            "name": "unlockingFee",
            "type": "u64"
          },
          {
            "name": "unlockingTimes",
            "type": {
              "array": [
                "i64",
                4
              ]
            }
          },
          {
            "name": "saleStatus",
            "type": "bool"
          },
          {
            "name": "unlockingStatus",
            "type": "bool"
          },
          {
            "name": "totalTokensSold",
            "type": "u64"
          },
          {
            "name": "buyers",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "buyer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "exists",
            "type": "bool"
          },
          {
            "name": "isUnlocked",
            "type": {
              "array": [
                "bool",
                4
              ]
            }
          },
          {
            "name": "unlockedAmount",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "SaleNotActive",
      "msg": "The sale is not active."
    },
    {
      "code": 6001,
      "name": "NotEnoughTokens",
      "msg": "Not enough tokens available for sale."
    },
    {
      "code": 6002,
      "name": "UnlockingNotActive",
      "msg": "Unlocking of tokens is not active."
    },
    {
      "code": 6003,
      "name": "NoTokensToUnlock",
      "msg": "You have no tokens to unlock."
    },
    {
      "code": 6004,
      "name": "Overflow",
      "msg": "Operation caused an overflow."
    }
  ]
};
