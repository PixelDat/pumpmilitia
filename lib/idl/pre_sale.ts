export type PreSale = {
  "version": "0.1.0",
  "name": "pre_sale",
  "instructions": [
    {
      "name": "makeDirectSolTransfer",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
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
    }
  ]
};

export const IDL: PreSale = {
  "version": "0.1.0",
  "name": "pre_sale",
  "instructions": [
    {
      "name": "makeDirectSolTransfer",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
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
    }
  ]
};
