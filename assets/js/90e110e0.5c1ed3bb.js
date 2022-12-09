"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6135],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,y=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2697:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={},c="Listing Authorization Keys",u={unversionedId:"dapp-dev-guide/load-auth-keys",id:"dapp-dev-guide/load-auth-keys",title:"Listing Authorization Keys",description:"This topic explains the difference between associated keys and authorization keys and the benefits of the list authorization keys feature.",source:"@site/source/docs/casper/dapp-dev-guide/load-auth-keys.md",sourceDirName:"dapp-dev-guide",slug:"/dapp-dev-guide/load-auth-keys",permalink:"/dapp-dev-guide/load-auth-keys",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/load-auth-keys.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Associated Keys and Authorization Keys",id:"associated-keys-and-authorization-keys",level:2},{value:"Accessing Authorization Keys from a Smart Contract",id:"accessing-authorization-keys-from-a-smart-contract",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"listing-authorization-keys"},"Listing Authorization Keys"),(0,o.kt)("p",null,"This topic explains the difference between associated keys and authorization keys and the benefits of the list authorization keys feature."),(0,o.kt)("h2",{id:"associated-keys-and-authorization-keys"},"Associated Keys and Authorization Keys"),(0,o.kt)("p",null,"Lets understand the relation between associated keys and authorization keys. To understand more about associated keys and how they are linked to an account, see the ",(0,o.kt)("a",{parentName:"p",href:"/workflow/two-party-multi-sig/"},"Two-Party Multi-Signature workflow"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Associated keys are public keys which are associated with a given account."),(0,o.kt)("li",{parentName:"ul"},"Authorization keys are public keys which are used to sign a given deploy and are used by the node to check that the deploy has permission to be executed."),(0,o.kt)("li",{parentName:"ul"},"Different executions of the same smart contract can have different authorization keys."),(0,o.kt)("li",{parentName:"ul"},"Authorization keys are always a subset of the associated keys of the account under which the deploy is executed.")),(0,o.kt)("h2",{id:"accessing-authorization-keys-from-a-smart-contract"},"Accessing Authorization Keys from a Smart Contract"),(0,o.kt)("p",null,"A smart contract can retrieve the set of authorization keys for the given execution by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime::list_authorization_keys")," function. This returns the set of account hashes representing all the keys used to sign the deploy under which the contract is executing."),(0,o.kt)("p",null,"This gives developers more fine-grained control within their smart contracts. For example, developers can define a hierarchy within an account's associated keys, and use that along with the current execution's authorization keys to limit access for certain operations to specific keys."))}h.isMDXComponent=!0}}]);