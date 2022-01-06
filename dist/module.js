import {jsx as $3Phvp$jsx, jsxs as $3Phvp$jsxs} from "react/jsx-runtime";
import "react";
import $3Phvp$proptypes from "prop-types";
import $3Phvp$classnames from "classnames";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireb326"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireb326"] = parcelRequire;
}




function $d216efa10efac397$var$Avatar({ avatarUrl: avatarUrl , hasBorder: hasBorder , ...rest }) {
    return(/*#__PURE__*/ $3Phvp$jsx("img", {
        ...rest,
        className: $3Phvp$classnames('ud-h-10 ud-w-10 ud-object-cover ud-rounded-full', {
            'ud-border-2 ud-border-white': hasBorder
        }),
        src: avatarUrl,
        alt: `avatar`,
        __source: {
            fileName: "src/components/Avatar.js",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: this
    }));
}
$d216efa10efac397$var$Avatar.propTypes = {
    avatarUrl: $3Phvp$proptypes.string.isRequired,
    hasBorder: $3Phvp$proptypes.bool
};
var $d216efa10efac397$export$2e2bcd8739ae039 = $d216efa10efac397$var$Avatar;






function $dba7d7b6deb6389f$var$AvatarList({ users: users , label: label , onClick: onClick  }) {
    return(/*#__PURE__*/ $3Phvp$jsxs("div", {
        className: "ud-flex ud-space-x-2 ud-items-center",
        onClick: onClick,
        __source: {
            fileName: "src/components/AvatarList.js",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $3Phvp$jsx("div", {
                className: "ud-flex ud--space-x-2",
                __source: {
                    fileName: "src/components/AvatarList.js",
                    lineNumber: 8,
                    columnNumber: 7
                },
                __self: this,
                children: users.slice(0, 3).map((user, index)=>/*#__PURE__*/ $3Phvp$jsx($d216efa10efac397$export$2e2bcd8739ae039, {
                        avatarUrl: user.avatarUrl,
                        hasBorder: true,
                        __source: {
                            fileName: "src/components/AvatarList.js",
                            lineNumber: 10,
                            columnNumber: 11
                        },
                        __self: this
                    }, index)
                )
            }),
            /*#__PURE__*/ $3Phvp$jsx("p", {
                className: "ud-text-sm",
                __source: {
                    fileName: "src/components/AvatarList.js",
                    lineNumber: 13,
                    columnNumber: 7
                },
                __self: this,
                children: label
            })
        ]
    }));
}
$dba7d7b6deb6389f$var$AvatarList.propTypes = {
    users: $3Phvp$proptypes.array.isRequired,
    label: $3Phvp$proptypes.string.isRequired,
    onClick: $3Phvp$proptypes.func
};
var $dba7d7b6deb6389f$export$2e2bcd8739ae039 = $dba7d7b6deb6389f$var$AvatarList;






const $bdce10c2c83416bd$var$SIZE = {
    xs: 'ud-text-[10px] ud-px-2.5 ud-py-0.5',
    sm: 'ud-text-xs ud-px-2.5 ud-py-0.5 '
};
const $bdce10c2c83416bd$var$VARIANT = {
    primary: 'ud-bg-primary ud-text-white',
    info: 'ud-bg-info ud-text-white',
    danger: 'ud-bg-danger ud-text-white',
    warning: 'ud-bg-warning ud-text-black',
    success: 'ud-bg-success ud-text-white'
};
function $bdce10c2c83416bd$var$Badge({ variant: variant = 'primary' , size: size = 'sm' , children: children , onClick: onClick , ...rest }) {
    return(/*#__PURE__*/ $3Phvp$jsx("span", {
        onClick: onClick,
        className: $3Phvp$classnames('ud-rounded-full ', $bdce10c2c83416bd$var$VARIANT[variant], $bdce10c2c83416bd$var$SIZE[size]),
        ...rest,
        __source: {
            fileName: "src/components/Badge.js",
            lineNumber: 26,
            columnNumber: 5
        },
        __self: this,
        children: children
    }));
}
$bdce10c2c83416bd$var$Badge.propTypes = {
    variant: $3Phvp$proptypes.oneOf([
        'primary',
        'info',
        'danger',
        'warning',
        'success'
    ]),
    children: $3Phvp$proptypes.node,
    onClick: $3Phvp$proptypes.func
};
var $bdce10c2c83416bd$export$2e2bcd8739ae039 = $bdce10c2c83416bd$var$Badge;






const $ce734a8366ecbc94$var$BUTTON_SIZE = {
    xs: 'ud-text-xs ud-px-3 ud-py-2 ',
    sm: 'ud-text-sm ud-px-3 ud-py-2',
    base: 'ud-text-sm ud-px-5 ud-py-2.5',
    large: 'ud-text-base ud-font-medium ud-px-5 ud-py-3',
    extraLarge: 'ud-text-base ud-font-medium ud-px-6 ud-py-3.5'
};
const $ce734a8366ecbc94$var$BUTTON_VARIANT = {
    primary: 'ud-bg-primary ud-text-white hover:ud-bg-primary-dark',
    info: 'ud-bg-info ud-text-white hover:ud-bg-info-dark',
    danger: 'ud-bg-danger ud-text-white hover:ud-bg-danger-dark',
    warning: 'ud-bg-warning ud-text-black hover:ud-bg-warning-dark',
    success: 'ud-bg-success ud-text-white hover:ud-bg-success-dark',
    link: 'ud-text-primary ud-underline ud-bg-transparent hover:ud-text-primary-dark !ud-p-0'
};
function $ce734a8366ecbc94$var$Button({ variant: variant = 'primary' , size: size = 'base' , children: children , className: className , block: block = false , disabled: disabled = false , ...rest }) {
    return(/*#__PURE__*/ $3Phvp$jsx("button", {
        ...rest,
        type: "button",
        disabled: disabled,
        className: $3Phvp$classnames('ud-rounded-md ud-font-sans ud-border-0 ud-cursor-pointer disabled:ud-opacity-75 disabled:ud-cursor-not-allowed', $ce734a8366ecbc94$var$BUTTON_VARIANT[variant], $ce734a8366ecbc94$var$BUTTON_SIZE[size], className, {
            'ud-block ud-w-full': block
        }),
        __source: {
            fileName: "src/components/Button.js",
            lineNumber: 32,
            columnNumber: 5
        },
        __self: this,
        children: children
    }));
}
$ce734a8366ecbc94$var$Button.variant = $ce734a8366ecbc94$var$BUTTON_VARIANT;
$ce734a8366ecbc94$var$Button.size = $ce734a8366ecbc94$var$BUTTON_SIZE;
$ce734a8366ecbc94$var$Button.propTypes = {
    variant: $3Phvp$proptypes.oneOf([
        'primary',
        'info',
        'danger',
        'warning',
        'success',
        'link', 
    ]),
    size: $3Phvp$proptypes.oneOf([
        'xs',
        'sm',
        'base',
        'large',
        'extraLarge'
    ]),
    children: $3Phvp$proptypes.node,
    className: $3Phvp$proptypes.string,
    block: $3Phvp$proptypes.bool,
    disabled: $3Phvp$proptypes.bool
};
var $ce734a8366ecbc94$export$2e2bcd8739ae039 = $ce734a8366ecbc94$var$Button;





// TODO: Add option to adjust the min height of container to full screen
function $7cdbd898ae60260d$var$Container({ children: children  }) {
    return(/*#__PURE__*/ $3Phvp$jsx("div", {
        className: "ud-container ud-px-6 ud-py-6 ud-mx-auto",
        __source: {
            fileName: "src/components/Container.js",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: this,
        children: children
    }));
}
$7cdbd898ae60260d$var$Container.propTypes = {
    children: $3Phvp$proptypes.node.isRequired
};
var $7cdbd898ae60260d$export$2e2bcd8739ae039 = $7cdbd898ae60260d$var$Container;






function $6924463d2fa47c63$var$ContentCard({ avatarUrl: avatarUrl , coverUrl: coverUrl , title: title , shortDesc: shortDesc , onClick: onClick  }) {
    return(/*#__PURE__*/ $3Phvp$jsxs("article", {
        className: "ud-flex ud-flex-col ud-rounded-lg ud-w-64 ud-bg-white ud-shadow-md ud-group hover:ud-bg-warning ud-cursor-pointer ud-overflow-hidden",
        onClick: onClick,
        __source: {
            fileName: "src/components/ContentCard.js",
            lineNumber: 8,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $3Phvp$jsxs("div", {
                className: "ud-relative ud-h-40",
                __source: {
                    fileName: "src/components/ContentCard.js",
                    lineNumber: 12,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $3Phvp$jsx("div", {
                        className: "ud-absolute ud-w-64 ud-h-40 ud-bg-slate-400/20",
                        __source: {
                            fileName: "src/components/ContentCard.js",
                            lineNumber: 13,
                            columnNumber: 9
                        },
                        __self: this
                    }),
                    coverUrl ? /*#__PURE__*/ $3Phvp$jsx("img", {
                        className: "ud-w-64 ud-h-40",
                        src: coverUrl,
                        alt: "image cover",
                        __source: {
                            fileName: "src/components/ContentCard.js",
                            lineNumber: 15,
                            columnNumber: 11
                        },
                        __self: this
                    }) : /*#__PURE__*/ $3Phvp$jsx("div", {
                        className: "ud-w-64 ud-h-40 ud-bg-primary/20",
                        __source: {
                            fileName: "src/components/ContentCard.js",
                            lineNumber: 17,
                            columnNumber: 11
                        },
                        __self: this
                    }),
                    /*#__PURE__*/ $3Phvp$jsx("div", {
                        className: "ud-absolute ud-right-2 ud-top-2",
                        __source: {
                            fileName: "src/components/ContentCard.js",
                            lineNumber: 19,
                            columnNumber: 9
                        },
                        __self: this,
                        children: /*#__PURE__*/ $3Phvp$jsx($d216efa10efac397$export$2e2bcd8739ae039, {
                            avatarUrl: avatarUrl,
                            __source: {
                                fileName: "src/components/ContentCard.js",
                                lineNumber: 20,
                                columnNumber: 11
                            },
                            __self: this
                        })
                    })
                ]
            }),
            /*#__PURE__*/ $3Phvp$jsxs("div", {
                className: "ud-flex ud-flex-col ud-space-y-1 ud-px-4 ud-py-3",
                __source: {
                    fileName: "src/components/ContentCard.js",
                    lineNumber: 23,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $3Phvp$jsx("h2", {
                        className: "ud-text-black ud-font-semibold group-hover:ud-text-primary",
                        __source: {
                            fileName: "src/components/ContentCard.js",
                            lineNumber: 24,
                            columnNumber: 9
                        },
                        __self: this,
                        children: title
                    }),
                    /*#__PURE__*/ $3Phvp$jsx("p", {
                        className: "ud-text-sm ud-text-black",
                        __source: {
                            fileName: "src/components/ContentCard.js",
                            lineNumber: 27,
                            columnNumber: 9
                        },
                        __self: this,
                        children: shortDesc
                    })
                ]
            })
        ]
    }));
}
$6924463d2fa47c63$var$ContentCard.propTypes = {
    avatarUrl: $3Phvp$proptypes.string.isRequired,
    coverUrl: $3Phvp$proptypes.string.isRequired,
    title: $3Phvp$proptypes.string.isRequired,
    shortDesc: $3Phvp$proptypes.string.isRequired,
    onClick: $3Phvp$proptypes.func
};
var $6924463d2fa47c63$export$2e2bcd8739ae039 = $6924463d2fa47c63$var$ContentCard;











function $bd07cc75cb7daa6b$var$Title({ children: children  }) {
    return(/*#__PURE__*/ $3Phvp$jsx("h1", {
        className: "ud-text-lg ud-font-bold ud-text-black",
        __source: {
            fileName: "src/components/Title.js",
            lineNumber: 6,
            columnNumber: 10
        },
        __self: this,
        children: children
    }));
}
$bd07cc75cb7daa6b$var$Title.propTypes = {
    children: $3Phvp$proptypes.oneOfType([
        $3Phvp$proptypes.string
    ]).isRequired
};
var $bd07cc75cb7daa6b$export$2e2bcd8739ae039 = $bd07cc75cb7daa6b$var$Title;



function $cb140192ae76f5c0$var$ContentCardList({ title: title , items: items , onItemClick: onItemClick , ctaText: ctaText , onCtaClick: onCtaClick , hasPadding: hasPadding ,  }) {
    return(/*#__PURE__*/ $3Phvp$jsxs("div", {
        className: $3Phvp$classnames('ud-flex ud-flex-col ud-space-y-2', {
            'ud-container ud-mx-auto ud-pl-6 ': hasPadding
        }),
        __source: {
            fileName: "src/components/ContentCardList.js",
            lineNumber: 18,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $3Phvp$jsxs("div", {
                className: "ud-flex ud-items-center ud-justify-between",
                __source: {
                    fileName: "src/components/ContentCardList.js",
                    lineNumber: 23,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $3Phvp$jsx($bd07cc75cb7daa6b$export$2e2bcd8739ae039, {
                        __source: {
                            fileName: "src/components/ContentCardList.js",
                            lineNumber: 24,
                            columnNumber: 9
                        },
                        __self: this,
                        children: title
                    }),
                    /*#__PURE__*/ $3Phvp$jsx($ce734a8366ecbc94$export$2e2bcd8739ae039, {
                        variant: "link",
                        className: $3Phvp$classnames({
                            'ud-mr-6': hasPadding
                        }),
                        onClick: onCtaClick,
                        __source: {
                            fileName: "src/components/ContentCardList.js",
                            lineNumber: 25,
                            columnNumber: 9
                        },
                        __self: this,
                        children: ctaText
                    })
                ]
            }),
            /*#__PURE__*/ $3Phvp$jsx("div", {
                className: "ud-flex ud-space-x-2 ud-overflow-x-scroll",
                __source: {
                    fileName: "src/components/ContentCardList.js",
                    lineNumber: 35,
                    columnNumber: 7
                },
                __self: this,
                children: items.map((item, index)=>/*#__PURE__*/ $3Phvp$jsx("div", {
                        __source: {
                            fileName: "src/components/ContentCardList.js",
                            lineNumber: 37,
                            columnNumber: 11
                        },
                        __self: this,
                        children: /*#__PURE__*/ $3Phvp$jsx($6924463d2fa47c63$export$2e2bcd8739ae039, {
                            avatarUrl: item.avatarUrl,
                            coverUrl: item.coverUrl,
                            title: item.title,
                            shortDesc: item.shortDesc,
                            onClick: ()=>onItemClick(item)
                            ,
                            __source: {
                                fileName: "src/components/ContentCardList.js",
                                lineNumber: 38,
                                columnNumber: 13
                            },
                            __self: this
                        })
                    }, index)
                )
            })
        ]
    }));
}
$cb140192ae76f5c0$var$ContentCardList.propTypes = {
    title: $3Phvp$proptypes.string,
    items: $3Phvp$proptypes.array.isRequired,
    onItemClick: $3Phvp$proptypes.func,
    ctaText: $3Phvp$proptypes.string,
    onCtaClick: $3Phvp$proptypes.func,
    hasPadding: $3Phvp$proptypes.bool
};
var $cb140192ae76f5c0$export$2e2bcd8739ae039 = $cb140192ae76f5c0$var$ContentCardList;







function $325d308f24f2e5ea$var$LoanCard({ firstName: firstName , avatarUrl: avatarUrl , amount: amount , paymentDate: paymentDate , onPay: onPay  }) {
    return(/*#__PURE__*/ $3Phvp$jsxs("div", {
        className: "ud-bg-warning ud-px-4 ud-py-6 ud-rounded-lg ud-shadow-sm",
        __source: {
            fileName: "src/components/LoanCard.js",
            lineNumber: 9,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $3Phvp$jsxs("div", {
                className: "ud-flex ud-justify-between ud-items-center ud-w-full",
                __source: {
                    fileName: "src/components/LoanCard.js",
                    lineNumber: 10,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $3Phvp$jsxs("p", {
                        className: "ud-text-primary ud-text-base ud-capitalize",
                        __source: {
                            fileName: "src/components/LoanCard.js",
                            lineNumber: 11,
                            columnNumber: 9
                        },
                        __self: this,
                        children: [
                            firstName,
                            " Personal loan"
                        ]
                    }),
                    /*#__PURE__*/ $3Phvp$jsx($d216efa10efac397$export$2e2bcd8739ae039, {
                        avatarUrl: avatarUrl,
                        __source: {
                            fileName: "src/components/LoanCard.js",
                            lineNumber: 14,
                            columnNumber: 9
                        },
                        __self: this
                    })
                ]
            }),
            /*#__PURE__*/ $3Phvp$jsx("h2", {
                className: "ud-mt-3 ud-text-3xl ud-text-black ud-font-semibold",
                __source: {
                    fileName: "src/components/LoanCard.js",
                    lineNumber: 16,
                    columnNumber: 7
                },
                __self: this,
                children: amount
            }),
            /*#__PURE__*/ $3Phvp$jsxs("div", {
                className: "ud-flex ud-justify-between ud-mt-5",
                __source: {
                    fileName: "src/components/LoanCard.js",
                    lineNumber: 19,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $3Phvp$jsxs("div", {
                        __source: {
                            fileName: "src/components/LoanCard.js",
                            lineNumber: 20,
                            columnNumber: 9
                        },
                        __self: this,
                        children: [
                            /*#__PURE__*/ $3Phvp$jsx("p", {
                                className: "ud-text-xs ud-text-primary ud-uppercase",
                                __source: {
                                    fileName: "src/components/LoanCard.js",
                                    lineNumber: 21,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: "NEXT SCHEDULED PAYMENT"
                            }),
                            /*#__PURE__*/ $3Phvp$jsx("p", {
                                className: "ud-text-base ud-text-black ud-font-bold",
                                __source: {
                                    fileName: "src/components/LoanCard.js",
                                    lineNumber: 24,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: paymentDate
                            })
                        ]
                    }),
                    /*#__PURE__*/ $3Phvp$jsx($ce734a8366ecbc94$export$2e2bcd8739ae039, {
                        onClick: onPay,
                        __source: {
                            fileName: "src/components/LoanCard.js",
                            lineNumber: 28,
                            columnNumber: 9
                        },
                        __self: this,
                        children: "Pay"
                    })
                ]
            })
        ]
    }));
}
$325d308f24f2e5ea$var$LoanCard.propTypes = {
    firstName: $3Phvp$proptypes.string.isRequired,
    avatarUrl: $3Phvp$proptypes.string.isRequired,
    amount: $3Phvp$proptypes.string.isRequired,
    paymentDate: $3Phvp$proptypes.string.isRequired,
    onPay: $3Phvp$proptypes.func
};
var $325d308f24f2e5ea$export$2e2bcd8739ae039 = $325d308f24f2e5ea$var$LoanCard;







const $90cd42957002a5f0$var$SPACE_SIZE = {
    xs: 'ud-mt-1',
    sm: 'ud-mt-2',
    base: 'ud-mt-3',
    large: 'ud-mt-4',
    extraLarge: 'ud-mt-5'
};
function $90cd42957002a5f0$var$VSpace({ size: size = 'extraLarge'  }) {
    return(/*#__PURE__*/ $3Phvp$jsx("div", {
        className: $3Phvp$classnames($90cd42957002a5f0$var$SPACE_SIZE[size]),
        __source: {
            fileName: "src/components/VSpace.js",
            lineNumber: 14,
            columnNumber: 10
        },
        __self: this
    }));
}
$90cd42957002a5f0$var$VSpace.propTypes = {
    size: $3Phvp$proptypes.oneOf([
        'xs',
        'sm',
        'base',
        'large',
        'extraLarge'
    ])
};
var $90cd42957002a5f0$export$2e2bcd8739ae039 = $90cd42957002a5f0$var$VSpace;







parcelRequire.register("lr0dR", function(module, exports) {

module.exports = (parcelRequire("35WCw")).getBundleURL('3Phvp') + "Exclude.16a0dfc2.png";

});
parcelRequire.register("35WCw", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", () => $240f4f811bd65243$export$bdfd709ae4826697, (v) => $240f4f811bd65243$export$bdfd709ae4826697 = v);
var $240f4f811bd65243$export$bdfd709ae4826697;
var $240f4f811bd65243$export$c9e73fbda7da57b6;
var $240f4f811bd65243$export$5a759dc7a1cfb72a;
"use strict";
var $240f4f811bd65243$var$bundleURL = {
};
function $240f4f811bd65243$var$getBundleURLCached(id) {
    var value = $240f4f811bd65243$var$bundleURL[id];
    if (!value) {
        value = $240f4f811bd65243$var$getBundleURL();
        $240f4f811bd65243$var$bundleURL[id] = value;
    }
    return value;
}
function $240f4f811bd65243$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $240f4f811bd65243$var$getBaseURL(matches[2]);
    }
    return '/';
}
function $240f4f811bd65243$var$getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $240f4f811bd65243$var$getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
$240f4f811bd65243$export$bdfd709ae4826697 = $240f4f811bd65243$var$getBundleURLCached;
$240f4f811bd65243$export$c9e73fbda7da57b6 = $240f4f811bd65243$var$getBaseURL;
$240f4f811bd65243$export$5a759dc7a1cfb72a = $240f4f811bd65243$var$getOrigin;

});




function $5bda6e165d715659$var$ArticleCard({ articleTitle: articleTitle , articleContent: articleContent , onClick: onClick  }) {
    return(/*#__PURE__*/ $3Phvp$jsx("div", {
        className: "ud-w-40 ud-shadow-md",
        onClick: onClick,
        __source: {
            fileName: "src/components/ArticleCard.js",
            lineNumber: 9,
            columnNumber: 5
        },
        __self: this,
        children: /*#__PURE__*/ $3Phvp$jsxs("div", {
            className: "ud-bg-violet-200 hover:ud-bg-violet-300 ud-py-6 ud-px-4 ud-rounded-lg",
            __source: {
                fileName: "src/components/ArticleCard.js",
                lineNumber: 10,
                columnNumber: 7
            },
            __self: this,
            children: [
                /*#__PURE__*/ $3Phvp$jsx($bd07cc75cb7daa6b$export$2e2bcd8739ae039, {
                    __source: {
                        fileName: "src/components/ArticleCard.js",
                        lineNumber: 11,
                        columnNumber: 9
                    },
                    __self: this,
                    children: articleTitle
                }),
                /*#__PURE__*/ $3Phvp$jsx("div", {
                    __source: {
                        fileName: "src/components/ArticleCard.js",
                        lineNumber: 12,
                        columnNumber: 9
                    },
                    __self: this,
                    children: /*#__PURE__*/ $3Phvp$jsxs("p", {
                        __source: {
                            fileName: "src/components/ArticleCard.js",
                            lineNumber: 13,
                            columnNumber: 11
                        },
                        __self: this,
                        children: [
                            " ",
                            articleContent
                        ]
                    })
                }),
                /*#__PURE__*/ $3Phvp$jsx("div", {
                    __source: {
                        fileName: "src/components/ArticleCard.js",
                        lineNumber: 15,
                        columnNumber: 9
                    },
                    __self: this,
                    children: /*#__PURE__*/ $3Phvp$jsx("img", {
                        src: (parcelRequire("lr0dR")),
                        __source: {
                            fileName: "src/components/ArticleCard.js",
                            lineNumber: 16,
                            columnNumber: 11
                        },
                        __self: this
                    })
                })
            ]
        })
    }));
}
$5bda6e165d715659$var$ArticleCard.PropTypes = {
    articleTitle: $3Phvp$proptypes.string.isRequired,
    articleContent: $3Phvp$proptypes.string.isRequired,
    onClick: $3Phvp$proptypes.func
};
$5bda6e165d715659$var$ArticleCard.defaultProps = {
    articleTitle: 'Article',
    articleContent: 'Some details about the content',
    onClick: ()=>{
        console.log('Article Card Clicked');
    }
};
var $5bda6e165d715659$export$2e2bcd8739ae039 = $5bda6e165d715659$var$ArticleCard;







function $d10753b9ef4a9524$var$ArticleCardList({ title: title , articleTitle: articleTitle , articleContent: articleContent , items: items , onItemClick: onItemClick , hasPadding: hasPadding ,  }) {
    return(/*#__PURE__*/ $3Phvp$jsxs("div", {
        className: "ud-flex ud-flex-col ud-space-y-2 ud-container ud-mx-auto ud-pl-6",
        __source: {
            fileName: "src/components/ArticleCardList.js",
            lineNumber: 15,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $3Phvp$jsx("div", {
                className: "ud-flex ud-items-center ud-justify-between",
                __source: {
                    fileName: "src/components/ArticleCardList.js",
                    lineNumber: 16,
                    columnNumber: 7
                },
                __self: this,
                children: /*#__PURE__*/ $3Phvp$jsx($bd07cc75cb7daa6b$export$2e2bcd8739ae039, {
                    __source: {
                        fileName: "src/components/ArticleCardList.js",
                        lineNumber: 17,
                        columnNumber: 9
                    },
                    __self: this,
                    children: title
                })
            }),
            /*#__PURE__*/ $3Phvp$jsx("div", {
                className: "ud-flex ud-space-x-2 ud-overflow-x-scroll",
                __source: {
                    fileName: "src/components/ArticleCardList.js",
                    lineNumber: 19,
                    columnNumber: 7
                },
                __self: this,
                children: items.map((item, index)=>/*#__PURE__*/ $3Phvp$jsx("div", {
                        __source: {
                            fileName: "src/components/ArticleCardList.js",
                            lineNumber: 21,
                            columnNumber: 11
                        },
                        __self: this,
                        children: /*#__PURE__*/ $3Phvp$jsx($5bda6e165d715659$exports.default, {
                            articleTitle: item.articleTitle,
                            articleContent: item.articleContent,
                            onClick: ()=>onItemClick(item)
                            ,
                            __source: {
                                fileName: "src/components/ArticleCardList.js",
                                lineNumber: 22,
                                columnNumber: 13
                            },
                            __self: this
                        })
                    }, index)
                )
            })
        ]
    }));
}
$d10753b9ef4a9524$var$ArticleCardList.PropTypes = {
    title: $3Phvp$proptypes.string,
    articleTitle: $3Phvp$proptypes.string,
    articleContent: $3Phvp$proptypes.string,
    items: $3Phvp$proptypes.array,
    onItemClick: $3Phvp$proptypes.func
};
var $d10753b9ef4a9524$export$2e2bcd8739ae039 = $d10753b9ef4a9524$var$ArticleCardList;




export {$d216efa10efac397$export$2e2bcd8739ae039 as Avatar, $dba7d7b6deb6389f$export$2e2bcd8739ae039 as AvatarList, $bdce10c2c83416bd$export$2e2bcd8739ae039 as Badge, $ce734a8366ecbc94$export$2e2bcd8739ae039 as Button, $7cdbd898ae60260d$export$2e2bcd8739ae039 as Container, $6924463d2fa47c63$export$2e2bcd8739ae039 as ContentCard, $cb140192ae76f5c0$export$2e2bcd8739ae039 as ContentCardList, $325d308f24f2e5ea$export$2e2bcd8739ae039 as LoanCard, $bd07cc75cb7daa6b$export$2e2bcd8739ae039 as Title, $90cd42957002a5f0$export$2e2bcd8739ae039 as VSpace, $d10753b9ef4a9524$export$2e2bcd8739ae039 as ArticleCardList};
