"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9216],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8153:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={},s="The DSL Macros",l={unversionedId:"dapp-dev-guide/contract-dsl/getting-started",id:"dapp-dev-guide/contract-dsl/getting-started",title:"The DSL Macros",description:"In this guide, we describe how to configure Rust smart contracts to use the Casper DSL, making it easier for developers to start writing their smart contracts.",source:"@site/source/docs/casper/dapp-dev-guide/contract-dsl/getting-started.md",sourceDirName:"dapp-dev-guide/contract-dsl",slug:"/dapp-dev-guide/contract-dsl/getting-started",permalink:"/docs/dapp-dev-guide/contract-dsl/getting-started",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/contract-dsl/getting-started.md",tags:[],version:"current",frontMatter:{}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"[Recommended] Getting the Macros",id:"recommended-getting-the-macros",level:2},{value:"Importing the Macros",id:"importing-the-macros",level:2},{value:"Using the DSL",id:"using-the-dsl",level:2},{value:"Examining the Hello World Example",id:"examining-the-hello-world-example",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-dsl-macros"},"The DSL Macros"),(0,o.kt)("p",null,"In this guide, we describe how to configure Rust smart contracts to use the Casper DSL, making it easier for developers to start writing their smart contracts."),(0,o.kt)("p",null,"The DSL consists of three macro directives dividing the boilerplate code between ",(0,o.kt)("em",{parentName:"p"},"headers"),", ",(0,o.kt)("em",{parentName:"p"},"constructor"),", and ",(0,o.kt)("em",{parentName:"p"},"method blocks"),". The smart contract is being treated much like a class in OOP terms."),(0,o.kt)("p",null,"Here is a brief description of the three macros before we take a look at a sample contract utilizing them:"),(0,o.kt)("p",null,"Macro Instruction Description"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Contract ",(0,o.kt)("inlineCode",{parentName:"p"},"casperlabs_contract")," This macro generates the code for the headers for each of the entry points that use it. It sits at the very top of the contract module and includes the necessary code for contract execution. Constructor ",(0,o.kt)("inlineCode",{parentName:"p"},"casperlabs_constructor")," This macro creates the code that sets up the contract in the runtime and locates it when execution begins. Underneath the hood, this is the deploy function that creates the contract entry point and stores the deploy hash under a function name in the Casper runtime. You can think of the function decorated by the constructor macro as the main function of the contract. Method ",(0,o.kt)("inlineCode",{parentName:"p"},"casperlabs_method")," This macro creates an entry point for any function in your contract that you wish to expose in the smart contract. Functions that are only used internally should not be decorated with this macro. Continuing the OOP metaphor, this directive would essentially be declaring a smart contract function as being public."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The DSL relies upon working in a Rust contract, which means you need to have your development environment up and running. In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/dapp-dev-guide/getting-started"},"Getting Started\xa0section"),", we compiled and tested a sample contract to verify our setup was functional. If you have not completed that section, please complete it before continuing with this guide."),(0,o.kt)("h2",{id:"recommended-getting-the-macros"},"[","Recommended","]"," Getting the Macros"),(0,o.kt)("p",null,"If you are new to Casper development, we recommend following this guide using the sample ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/hello-world"},"Hello World"),"\xa0contract. This smart contract Rust file has all the macros in place, and the configuration is already set up to import the macros for you."),(0,o.kt)("h2",{id:"importing-the-macros"},"Importing the Macros"),(0,o.kt)("p",null,"The sample contract already has this done for you, but you should know how to do it for future contracts. To import the macros, just include a line in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\xa0file in the ",(0,o.kt)("em",{parentName:"p"},"contract"),"\xa0folder of your smart contract. The entry needs to appear in the ",(0,o.kt)("em",{parentName:"p"},"[","dependencies","]"),"\xa0section of the file. Then ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo")," will import the macros into your project when you build it."),(0,o.kt)("p",null,"For example, if you placed the macros inside your project in a folder named ",(0,o.kt)("em",{parentName:"p"},"contract_macro"),"\xa0next to the ",(0,o.kt)("em",{parentName:"p"},"contract")," folder, you would add this line to the dependencies section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\xa0file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casperlabs-contract-macro = { path = "../contract_macro" }\n')),(0,o.kt)("h2",{id:"using-the-dsl"},"Using the DSL"),(0,o.kt)("p",null,"To use the DSL, simply add the following line to the ",(0,o.kt)("em",{parentName:"p"},"use section")," of the contract (usually found at the top of the file in ",(0,o.kt)("em",{parentName:"p"},"main.rs"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"use casperlabs_contract_macro::{casperlabs_constructor, casperlabs_contract, casperlabs_method};\n")),(0,o.kt)("h2",{id:"examining-the-hello-world-example"},"Examining the Hello World Example"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/hello-world"},"Hello World")," example contract and open the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.rs")," file. Examine the following section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#[casperlabs_contract]\nmod hello_world {\n\n\xa0 \xa0\xa0#[casperlabs_constructor]\n\xa0 \xa0\xa0fn init() {\n\xa0 \xa0 \xa0 \xa0\xa0let value = String::from(ARG_MESSAGE);\n\xa0 \xa0 \xa0 \xa0\xa0set_key(KEY, value);\n\xa0 \xa0\xa0}\n\n\xa0 \xa0\xa0#[casperlabs_method]\n\xa0 \xa0\xa0fn update(value: String) {\n\xa0 \xa0 \xa0 \xa0\xa0set_key(KEY, value)\n\xa0 \xa0\xa0}\n\n\xa0 \xa0\xa0fn set_key<T: ToBytes + CLTyped>(name: &str, value: T) {\n\xa0 \xa0 \xa0 \xa0\xa0match runtime::get_key(name) {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0Some(key) => {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0let key_ref = key.try_into().unwrap_or_revert();\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0storage::write(key_ref, value);\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0}\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0None => {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0let key = storage::new_uref(value).into();\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0runtime::put_key(name, key)\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0}\n\xa0 \xa0 \xa0 \xa0\xa0}\n\xa0 \xa0\xa0}\n}\n")),(0,o.kt)("p",null,"Notice that all three macros are being utilized and that the file is relatively compact. This is a very simple contract that initializes a key named ",(0,o.kt)("em",{parentName:"p"},"special_value"),"\xa0with the value ",(0,o.kt)("em",{parentName:"p"},"hello world"),"\xa0once the contract is compiled and executed thanks to the constructor macro. The function ",(0,o.kt)("em",{parentName:"p"},"update"),"\xa0is decorated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"casperlabs_method"),"\xa0macro and will thus be accessible for updating the value. However, notice that ",(0,o.kt)("em",{parentName:"p"},"set_key"),"\xa0is not prefaced with the macro. Since this function is used internally, it does not need to have an entry point in the Casper runtime. ","`","`"))}m.isMDXComponent=!0}}]);