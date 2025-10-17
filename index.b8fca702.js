// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateOffice", ()=>validateOffice);
var _initTableJs = require("./table/initTable.js");
var _initFormInteractionsJs = require("./form/initFormInteractions.js");
var _createFormJs = require("./form/createForm.js");
"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
    const table = document.querySelector("table");
    const form = document.querySelector("form");
    if (!table) return;
    (0, _initTableJs.initTableInteractions)(table);
    if (!form) (0, _createFormJs.createForm)(table);
    (0, _initFormInteractionsJs.initFormInteractions)(document.querySelector("form"), table);
});
function validateOffice(office) {
    if (!office) return {
        title: "Office",
        message: "Office field cannot be empty."
    };
}

},{"./table/initTable.js":"84FGB","./form/initFormInteractions.js":"aj662","./form/createForm.js":"8IiXI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"84FGB":[function(require,module,exports) {
// tableSort/initTable.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTableInteractions", ()=>initTableInteractions);
var _activeRowJs = require("./activeRow.js");
var _sortingJs = require("./sorting.js");
var _selectCellJs = require("./selectCell.js");
function initTableInteractions(table) {
    const tBody = table.querySelector("tbody");
    const tHead = table.querySelector("thead");
    if (!tHead || !tBody) return;
    let lastSortDescending;
    let lastSortColumn;
    let lastActiveRow;
    let activeInput = null;
    const makeRowActive = (0, _activeRowJs.makeRowActiveFactory)({
        get lastActiveRow () {
            return lastActiveRow;
        },
        set lastActiveRow (v){
            lastActiveRow = v;
        }
    });
    const sortColumn = (0, _sortingJs.sortColumnFactory)({
        tBody,
        get lastSortDescending () {
            return lastSortDescending;
        },
        set lastSortDescending (v){
            lastSortDescending = v;
        },
        get lastSortColumn () {
            return lastSortColumn;
        },
        set lastSortColumn (v){
            lastSortColumn = v;
        }
    });
    const selectCell = (0, _selectCellJs.selectCellFactory)({
        get activeInput () {
            return activeInput;
        },
        set activeInput (v){
            activeInput = v;
        }
    });
    tHead.addEventListener("click", (e)=>{
        const th = e.target.closest("th");
        if (!th) return;
        sortColumn(th);
    });
    tBody.addEventListener("click", (e)=>{
        const td = e.target.closest("td");
        if (!td) return;
        makeRowActive(td.parentElement);
    });
    tBody.addEventListener("dblclick", (ev)=>{
        if (activeInput) return;
        const cell = ev.target.closest("td");
        if (!cell) return;
        const colIndex = cell.cellIndex;
        const th = table.tHead.rows[0]?.cells[colIndex];
        const type = th?.getAttribute("data-type") || "string";
        const colName = th?.textContent.toLowerCase() || "default";
        selectCell(cell, type, colName);
    });
}

},{"./activeRow.js":"4N5ZX","./sorting.js":"K4gC6","./selectCell.js":"a7K0F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4N5ZX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeRowActiveFactory", ()=>makeRowActiveFactory);
function makeRowActiveFactory(state) {
    return function makeRowActive(tr) {
        if (state.lastActiveRow) state.lastActiveRow.classList.remove("active");
        tr.classList.add("active");
        state.lastActiveRow = tr;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"K4gC6":[function(require,module,exports) {
// tableSort/sorting.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sortColumnFactory", ()=>sortColumnFactory);
var _compareJs = require("./compare.js");
function sortColumnFactory(state) {
    const { tBody } = state;
    return function sortColumn(th) {
        const rowsArray = Array.from(tBody.rows ?? []);
        if (!rowsArray.length) return;
        const columnIndex = th.cellIndex ?? -1;
        const headRow = th.parentElement;
        if (columnIndex < 0 || !headRow || columnIndex >= headRow.cells.length) return;
        const resolvedType = th.dataset.type || "string";
        if (!state.lastSortColumn || state.lastSortColumn !== th.textContent) state.lastSortDescending = true;
        else state.lastSortDescending = !state.lastSortDescending;
        state.lastSortColumn = th.textContent;
        const cmp = (0, _compareJs.buildComparator)(columnIndex, resolvedType, state.lastSortDescending);
        rowsArray.sort(cmp);
        tBody.append(...rowsArray);
    };
}

},{"./compare.js":"9pmAl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9pmAl":[function(require,module,exports) {
// tableSort/compare.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildComparator", ()=>buildComparator);
var _utilsJs = require("../utils/utils.js");
function buildComparator(index, type, descending) {
    if (type === "number") return function cmpNumber(trA, trB) {
        if ((0, _utilsJs.hasInvalidTD)(trA.cells[index], trB.cells[index])) return 0;
        const numberA = (0, _utilsJs.convertToNumber)(trA.cells[index].textContent);
        const numberB = (0, _utilsJs.convertToNumber)(trB.cells[index].textContent);
        if ((0, _utilsJs.hasInvalidNumber)(numberA, numberB)) return 0;
        return descending ? numberA - numberB : numberB - numberA;
    };
    return function cmpString(trA, trB) {
        if ((0, _utilsJs.hasInvalidTD)(trA.cells[index], trB.cells[index])) return 0;
        const stringA = trA.cells[index].textContent.trim();
        const stringB = trB.cells[index].textContent.trim();
        return descending ? stringA.localeCompare(stringB) : stringB.localeCompare(stringA);
    };
}

},{"../utils/utils.js":"chRtz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chRtz":[function(require,module,exports) {
// tableSort/utils.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertToNumber", ()=>convertToNumber);
parcelHelpers.export(exports, "hasInvalidTD", ()=>hasInvalidTD);
parcelHelpers.export(exports, "hasInvalidNumber", ()=>hasInvalidNumber);
parcelHelpers.export(exports, "convertToCurrency", ()=>convertToCurrency);
parcelHelpers.export(exports, "clearErrorNotifications", ()=>clearErrorNotifications);
function convertToNumber(input) {
    let s = String(input).trim().replace(/[^\d,.\-\s\u00A0\u2007\u202F]/g, "").replace(/[\s\u00A0\u2007\u202F]/g, "");
    s = s.replace(/,/g, "");
    s = s.replace(/-/g, "");
    if (String(input).includes("-")) s = "-" + s;
    if (!s || s === "-" || /^[.]+$/.test(s)) return NaN;
    return Number(s);
}
function hasInvalidTD(tdA, tdB) {
    return !tdA || !tdB || tdA.textContent == null || tdB.textContent == null || tdA.textContent.trim() === "" || tdB.textContent.trim() === "";
}
function hasInvalidNumber(a, b) {
    return Number.isNaN(a) || Number.isNaN(b);
}
function convertToCurrency(amount) {
    const n = Number(amount);
    return n.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: n % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2
    });
}
function clearErrorNotifications() {
    const errorNotifications = document.querySelectorAll(".error");
    errorNotifications.length;
    for (const notification of errorNotifications)notification.remove();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7K0F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selectCellFactory", ()=>selectCellFactory);
var _validators = require("../validators/validators");
var _utils = require("../utils/utils");
var _pushNotification = require("../notification/pushNotification");
function selectCellFactory(state) {
    return function selectCell(cell, type, colName) {
        const prev = cell.textContent?.trim() ?? "";
        const input = document.createElement("input");
        input.type = type;
        input.className = "cell-input";
        input.name = colName;
        input.value = colName === "salary" ? (0, _utils.convertToNumber)(prev) : prev;
        state.activeInput = input;
        cell.textContent = "";
        cell.appendChild(input);
        input.focus();
        let canceled = false;
        let isValid = true;
        const save = ()=>{
            let newValue = input.value.trim();
            if (newValue === "") {
                cell.textContent = prev;
                state.activeInput = null;
                return;
            }
            let validationError = null;
            switch(colName){
                case "name":
                    validationError = (0, _validators.validateFullName)(newValue);
                    break;
                case "position":
                    validationError = (0, _validators.validatePosition)(newValue);
                    break;
                case "office":
                    validationError = (0, _validators.validateOffice)(newValue);
                    break;
                case "age":
                    validationError = (0, _validators.validateAge)(newValue);
                    break;
                case "salary":
                    validationError = (0, _validators.validateSalary)(newValue);
                    if (!validationError) newValue = (0, _utils.convertToCurrency)(newValue);
                    break;
                default:
                    validationError = {
                        title: "Error",
                        message: "Unknown column"
                    };
            }
            if (validationError) {
                createNotification(validationError);
                isValid = false;
            }
            if (isValid) {
                cell.textContent = newValue;
                canceled = true;
                state.activeInput = null;
            }
        };
        const cancel = ()=>{
            canceled = true;
            cell.textContent = prev;
            state.activeInput = null;
        };
        input.addEventListener("keydown", (ev)=>{
            if (ev.key === "Enter") save();
            if (ev.key === "Escape") cancel();
        });
        input.addEventListener("blur", ()=>{
            setTimeout(()=>{
                if (!canceled) save();
                if (!isValid) cancel();
            }, 0);
        }, {
            once: true
        });
        input.addEventListener("change", ()=>{
            isValid = true;
        });
    };
}
function createNotification({ title, message } = {}) {
    (0, _utils.clearErrorNotifications)();
    (0, _pushNotification.pushNotification)(10, 10, title, message, "error");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../validators/validators":"gvFvz","../utils/utils":"chRtz","../notification/pushNotification":"2jKcS"}],"gvFvz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateAge", ()=>validateAge);
parcelHelpers.export(exports, "validateFullName", ()=>validateFullName);
parcelHelpers.export(exports, "validatePosition", ()=>validatePosition);
parcelHelpers.export(exports, "validateSalary", ()=>validateSalary);
parcelHelpers.export(exports, "validateOffice", ()=>validateOffice);
function validateAge(age) {
    if (!age || age < 18 || age > 90 || !Number(age)) return {
        title: "Age",
        message: "Age must be between 18 and 90 years old."
    };
    return false;
}
function validateFullName(fullName) {
    if (!fullName || fullName.length < 4 || fullName.length > 40) return {
        title: "Full Name",
        message: "Name must be between 4 and 40 characters long."
    };
    return false;
}
function validatePosition(position) {
    if (!position || position.length < 2 || position.length > 40) return {
        title: "Position",
        message: "Position must be between 2 and 40 characters long."
    };
    return false;
}
function validateSalary(salary) {
    if (!salary || salary < 0 || salary > 1000000 || !Number(salary)) return {
        title: "Salary",
        message: "Salary must be between 0 and 1,000,000."
    };
    return false;
}
function validateOffice(office) {
    if (!office) return {
        title: "Office",
        message: "Office can not be empty."
    };
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2jKcS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pushNotification", ()=>pushNotification);
const pushNotification = (posTop, posRight, title, description, type)=>{
    const allert = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    allert.style.cssText = `
  position: fixed;
  top: ${posTop}px;
  right: ${posRight}px;
  `;
    allert.className = `notification ${type}`;
    allert.setAttribute("data-qa", "notification");
    h2.textContent = title;
    h2.className = "title";
    p.textContent = description;
    allert.append(h2, p);
    document.body.append(allert);
    setTimeout(()=>{
        if (allert) allert.style.display = "none";
    }, 2000);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aj662":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFormInteractions", ()=>initFormInteractions);
var _checkFormInputs = require("./checkFormInputs");
var _pushNotification = require("../notification/pushNotification");
var _utils = require("../utils/utils");
function initFormInteractions(form, table) {
    form.addEventListener("submit", (ev)=>{
        ev.preventDefault();
        const dataFromForm = {
            fullName: form.elements.name.value,
            position: form.elements.position.value,
            office: form.elements.office.value,
            age: form.elements.age.value,
            salary: form.elements.salary.value
        };
        const checkResults = (0, _checkFormInputs.checkFormInputs)(dataFromForm);
        if (checkResults.length > 0) handleError(checkResults);
        else {
            (0, _utils.clearErrorNotifications)();
            addData(dataFromForm, table);
            form.reset();
        }
    });
}
function handleError(errors) {
    for(let i = 0; i < errors.length; i++)(0, _pushNotification.pushNotification)(i * 140 + 10, 10, errors[i].title, errors[i].message, "error");
}
function addData({ fullName, position, office, age, salary } = {}, table) {
    const tBody = table.tBodies?.[0] ?? table.createTBody();
    const row = `<tr>
          <td>${fullName}</td>
          <td>${position}</td>
          <td>${office}</td>
          <td>${age}</td>
          <td>${(0, _utils.convertToCurrency)(salary)}</td>
        </tr>`;
    tBody.insertAdjacentHTML("beforeend", row);
    (0, _pushNotification.pushNotification)(10, 10, "Title of Success message", "Message example.\n Notification should contain title and description.", "success");
}

},{"./checkFormInputs":"QgB9O","../notification/pushNotification":"2jKcS","../utils/utils":"chRtz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"QgB9O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkFormInputs", ()=>checkFormInputs);
var _validators = require("../validators/validators");
const checkFormInputs = ({ fullName, position, office, age, salary } = {})=>{
    const validators = {
        fullName: (0, _validators.validateFullName),
        position: (0, _validators.validatePosition),
        office: (0, _validators.validateOffice),
        age: (0, _validators.validateAge),
        salary: (0, _validators.validateSalary)
    };
    const values = {
        fullName,
        position,
        office,
        age,
        salary
    };
    const errors = [];
    for (const [key, validateFn] of Object.entries(validators)){
        const error = validateFn(values[key]);
        if (error) errors.push(error);
    }
    return errors;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../validators/validators":"gvFvz"}],"8IiXI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createForm", ()=>createForm);
const html = `<form action="#" class="new-employee-form">
    <label>
      Name:
      <input
        name="name"
        type="text"
        data-qa="name"
      />
    </label>
    <label>
      Position:
      <input
        name="position"
        type="text"
        data-qa="position"
      />
    </label>
    <label>
      Office:
      <select
        name="office"
        data-qa="office"
      >
        <option value="Tokyo">Tokyo</option>
        <option value="Singapore">Singapore</option>
        <option value="London">London</option>
        <option value="New York">New York</option>
        <option value="Edinburgh">Edinburgh</option>
        <option value="San Francisco">San Francisco</option>
      </select>
    </label>
    <label>
      Age:
      <input
        name="age"
        type="number"
        data-qa="age"
      />
    </label>
    <label>
      Salary:
      <input
        name="salary"
        type="number"
        data-qa="salary"
      />
    </label>
    <button>Save to table</button>
  </form>`;
function createForm(table) {
    table.insertAdjacentHTML("afterend", html);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequire0089")

//# sourceMappingURL=index.b8fca702.js.map
