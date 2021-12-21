var $fbsOk$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $fbsOk$classnames = require("classnames");
var $fbsOk$proptypes = require("prop-types");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "AvatarList", () => $aae2cdbdcba990b9$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Button", () => $24cf76bc329384dd$export$2e2bcd8739ae039);


function $aae2cdbdcba990b9$var$AvatarList({ users: users , label: label , onClick: onClick  }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
        className: "flex space-x-2 items-center",
        onClick: onClick,
        children: [
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
                className: "flex -space-x-2",
                children: users.slice(0, 3).map((user, index)=>/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("img", {
                        className: "h-10 w-10 object-cover rounded-full border-2 border-white",
                        src: user.avatarUrl,
                        alt: `avatar-${index}`
                    }, index)
                )
            }),
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("p", {
                className: "text-sm",
                children: label
            })
        ]
    }));
}
var $aae2cdbdcba990b9$export$2e2bcd8739ae039 = $aae2cdbdcba990b9$var$AvatarList;






const $34a654368e265f37$export$cf3f0695ece5ed77 = {
    primary: 'bg-blue-100 text-blue-800',
    danger: 'bg-red-100 text-red-800',
    success: 'bg-green-100 text-green-800'
};
const $34a654368e265f37$export$af30b39b2c1193d4 = {
    primary: 'bg-primary text-white hover:bg-primary-dark disabled:bg-gray-200 disabled:text-gray-400',
    danger: 'bg-red-100 text-red-800 hover:bg-red-200 disabled:bg-gray-200 disabled:text-gray-400',
    success: 'bg-green-100 text-green-800 hover:bg-green-200 disabled:bg-gray-200 disabled:text-gray-400'
};


const $24cf76bc329384dd$var$BUTTON_SIZE = {
    xs: 'text-xs px-3 py-2',
    sm: 'text-sm px-3 py-2',
    base: 'text-sm px-5 py-2.5',
    large: 'text-base font-medium px-5 py-3',
    extraLarge: 'text-base font-medium px-6 py-3.5'
};
function $24cf76bc329384dd$var$Button({ variant: variant = 'primary' , size: size = 'base' , children: children , className: className , block: block = false , ...rest }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("button", {
        ...rest,
        className: ($parcel$interopDefault($fbsOk$classnames))('rounded-md font-sans', $34a654368e265f37$export$af30b39b2c1193d4[variant], $24cf76bc329384dd$var$BUTTON_SIZE[size], className, {
            'block w-full': block
        }),
        children: children
    }));
}
$24cf76bc329384dd$var$Button.variant = $34a654368e265f37$export$af30b39b2c1193d4;
$24cf76bc329384dd$var$Button.size = $24cf76bc329384dd$var$BUTTON_SIZE;
$24cf76bc329384dd$var$Button.propTypes = {
    variant: ($parcel$interopDefault($fbsOk$proptypes)).oneOf([
        'primary',
        'danger',
        'success'
    ]),
    size: ($parcel$interopDefault($fbsOk$proptypes)).oneOf([
        'xs',
        'sm',
        'base',
        'large',
        'extraLarge'
    ]),
    children: ($parcel$interopDefault($fbsOk$proptypes)).node,
    className: ($parcel$interopDefault($fbsOk$proptypes)).string,
    block: ($parcel$interopDefault($fbsOk$proptypes)).bool
};
var $24cf76bc329384dd$export$2e2bcd8739ae039 = $24cf76bc329384dd$var$Button;




