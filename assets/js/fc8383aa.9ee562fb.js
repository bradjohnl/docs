"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3869],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7779:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={},l="Tokens",c={unversionedId:"design/tokens",id:"design/tokens",title:"Tokens",description:"tokens-head}",source:"@site/source/docs/casper/design/tokens.md",sourceDirName:"design",slug:"/design/tokens",permalink:"/docs/design/tokens",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/design/tokens.md",tags:[],version:"current",frontMatter:{},sidebar:"design",previous:{title:"Serialization Standard",permalink:"/docs/design/serialization-standard"},next:{title:"Checksum Hex Encoding",permalink:"/docs/design/checksummed-hex"}},p={},u=[{value:"Introduction",id:"tokens-intro",level:2},{value:"Token Generation and Distribution",id:"token-generation-and-distribution",level:2},{value:"Divisibility of Tokens",id:"tokens-divisibility",level:2},{value:"Mints and Purses",id:"tokens-mints-and-purses",level:2},{value:"The mint Contract Interface",id:"tokens-mint-interface",level:2},{value:"Using purse <code>URef</code>s",id:"tokens-using-purses",level:2},{value:"Purses and Accounts",id:"tokens-purses-and-accounts",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tokens-head"},"Tokens"),(0,r.kt)("h2",{id:"tokens-intro"},"Introduction"),(0,r.kt)("p",null,"The Casper Network is a decentralized blockchain platform based on a Proof-of-Stake consensus algorithm called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/highway"},"Highway"),". Having a unit of value is required to make this system work because users must pay for computation, and validators must have ",(0,r.kt)("a",{parentName:"p",href:"/docs/staking"},"stake")," to bond. In the blockchain space, this unit of value is a ",(0,r.kt)("em",{parentName:"p"},"token"),"."),(0,r.kt)("p",null,"This chapter describes how we define tokens and how one can use them on the Casper platform."),(0,r.kt)("h2",{id:"token-generation-and-distribution"},"Token Generation and Distribution"),(0,r.kt)("p",null,"A blockchain system generally needs to have a supply of tokens available to pay for computation and reward validators for processing transactions on the network. The initial supply at the launch of Mainnet was 10 billion CSPR. The current supply is available ",(0,r.kt)("a",{parentName:"p",href:"https://api.cspr.live/supply"},"here"),". In addition to the initial supply, the system will have a low rate of inflation, the results of which will be paid out to validators in the form of seigniorage."),(0,r.kt)("p",null,"The number of tokens used as a basis for calculating seigniorage is 10 billion."),(0,r.kt)("h2",{id:"tokens-divisibility"},"Divisibility of Tokens"),(0,r.kt)("p",null,"Typically, a ",(0,r.kt)("em",{parentName:"p"},"token")," is divisible into some number of parts. We call the indivisible units which make up the CSPR token ",(0,r.kt)("em",{parentName:"p"},"motes"),". Each CSPR is divisible into 10",(0,r.kt)("sup",null,"9")," motes. To avoid rounding errors, it is essential to always represent token balances in motes. In comparison, Ether is divisible into 10",(0,r.kt)("sup",null,"18")," parts called Wei."),(0,r.kt)("h2",{id:"tokens-mints-and-purses"},"Mints and Purses"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"mint")," is a contract that can produce new motes of a particular type. We allow for multiple mote types (each of which would have its mint contract) because we anticipate the existence of a large ecosystem of different tokens, similar to the way Etherum works with ERC20 tokens. Casper will deploy a specific mint contract, and it will manage the CSPR utility token (used for paying for computation and bonding onto the network). The mint also maintains all the balances for its type of mote. Each balance is associated with a ",(0,r.kt)("inlineCode",{parentName:"p"},"URef"),", which acts as a key to instruct the mint to perform actions on that balance (e.g., transfer motes). Informally, we will refer to these balances as ",(0,r.kt)("em",{parentName:"p"},"purses")," and conceptually represent a container for motes. The ",(0,r.kt)("inlineCode",{parentName:"p"},"URef")," is how a purse is referenced externally, outside the mint."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessRights")," of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/design/uref#global-state-urefs-permissions"},"URefs")," permissions model determine what actions are allowed to be performed when using a ",(0,r.kt)("inlineCode",{parentName:"p"},"URef")," associated with a purse."),(0,r.kt)("p",null,"As all ",(0,r.kt)("inlineCode",{parentName:"p"},"URef"),"s are unforgeable, so the only way to interact with a purse is for a ",(0,r.kt)("inlineCode",{parentName:"p"},"URef")," with appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessRights")," to be given to the current context in a valid way (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/design/uref#global-state-urefs-permissions"},"URefs")," permissions for details)."),(0,r.kt)("p",null,"The basic global state options map onto more standard monetary operations according to the table below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Global State"),(0,r.kt)("th",{parentName:"tr",align:null},"Action Monetary Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add"),(0,r.kt)("td",{parentName:"tr",align:null},"Deposit (i.e. transfer to)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Write"),(0,r.kt)("td",{parentName:"tr",align:null},"Withdraw (i.e. transfer from) Read Balance check")))),(0,r.kt)("p",null,"We will use these definitions throughout this chapter to describe the implementation and usage of tokens on the Casper system."),(0,r.kt)("h2",{id:"tokens-mint-interface"},"The mint Contract Interface"),(0,r.kt)("p",null,"A valid mint contract exposes the following methods (recall that many mint implementations may exist, each corresponding to a different currency):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transfer(source: URef, target: URef, amount: Motes) -> TransferResult"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source")," must have at least ",(0,r.kt)("inlineCode",{parentName:"li"},"Write")," access rights, ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," must have at least ",(0,r.kt)("inlineCode",{parentName:"li"},"Add")," access rights"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TransferResult")," may be a success acknowledgment or an error in the case of invalid ",(0,r.kt)("inlineCode",{parentName:"li"},"source")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," or insufficient balance in the ",(0,r.kt)("inlineCode",{parentName:"li"},"source")," purse"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mint(amount: Motes) -> MintResult"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MintResult")," either gives the created ",(0,r.kt)("inlineCode",{parentName:"li"},"URef")," (with full access rights), which now has a balance equal to the given ",(0,r.kt)("inlineCode",{parentName:"li"},"amount"),"; or an error due to the minting of new motes not being allowed"),(0,r.kt)("li",{parentName:"ul"},"In the Casper mint, only the system account can call ",(0,r.kt)("inlineCode",{parentName:"li"},"mint"),", and it has no private key to produce valid cryptographic signatures, which means only the software itself can execute contracts in the context of the system account"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create() -> URef"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a convenience function for ",(0,r.kt)("inlineCode",{parentName:"li"},"mint(0)")," which cannot fail because it is always allowed to create an empty purse"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"balance(purse: URef) -> Option<Motes>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"purse")," must have at least ",(0,r.kt)("inlineCode",{parentName:"li"},"Read")," access rights"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BalanceResult")," either returns the number of motes held by the ",(0,r.kt)("inlineCode",{parentName:"li"},"purse"),", or nothing if the ",(0,r.kt)("inlineCode",{parentName:"li"},"URef")," is not valid")))),(0,r.kt)("h2",{id:"tokens-using-purses"},"Using purse ",(0,r.kt)("inlineCode",{parentName:"h2"},"URef"),"s"),(0,r.kt)("p",null,"It is dangerous to pass a purse's ",(0,r.kt)("inlineCode",{parentName:"p"},"URef")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Write")," permissions to a contract. A malicious contract may use that access to take more tokens than were intended or share that ",(0,r.kt)("inlineCode",{parentName:"p"},"URef")," with another contract that was not meant to have that access. Therefore, if a contract requires a purse with ",(0,r.kt)("inlineCode",{parentName:"p"},"Write"),' permissions, it is always recommended to use a "payment purse" ',"-","- a purse used for that single transaction and nothing else. This ensures that even if the ",(0,r.kt)("inlineCode",{parentName:"p"},"URef")," becomes compromised, it does not contain any more funds than the user intended on giving."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let main_purse = contract_api::main_purse();\nlet payment_purse = contract_api::create_purse();\n\nmatch contract_api::transfer_purse_to_purse(main_purse, payment_purse, payment_amount) {\n    TransferResult::Success => contract_api::call_contract(contract_to_pay, payment_purse),\n    _ => contract_api::revert(1),\n}\n")),(0,r.kt)("p",null,"To avoid this inconvenience, it is a better practice for application developers intending to accept payment on-chain to make a version of their own purse ",(0,r.kt)("inlineCode",{parentName:"p"},"URef")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Read")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Add")," access rights publicly available. This allows clients to pay via a transfer using their purse, without either party exposing ",(0,r.kt)("inlineCode",{parentName:"p"},"Write")," access to any purse."),(0,r.kt)("h2",{id:"tokens-purses-and-accounts"},"Purses and Accounts"),(0,r.kt)("p",null,"All ",(0,r.kt)("a",{parentName:"p",href:"/docs/design/accounts#accounts-head"},"accounts-head")," on the Casper system have a purse associated with the Casper system mint, which we call the ",(0,r.kt)("em",{parentName:"p"},"main purse"),". However, for security reasons, the ",(0,r.kt)("inlineCode",{parentName:"p"},"URef")," of the main purse is only available to code running in the context of that account (i.e. only in payment or session code). Therefore, the mint's ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," method which accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"URef"),"s is not the most convenient to use when transferring between account main purses. For this reason, Casper supplies a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_to_account.html"},"transfer_to_account")," function which takes the public key used to derive the identity key of the account. This function uses the mint transfer function with the current account's main purse as the ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," and the main purse of the account at the provided key as the ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),"."))}d.isMDXComponent=!0}}]);