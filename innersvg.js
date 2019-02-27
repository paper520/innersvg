(function (global, factory) {

  'use strict';

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else {
    global.innerSVG = factory();
  }

})(typeof window !== "undefined" ? window : this, function (undefined) {

  // 记录需要使用xlink命名空间常见的xml属性
  var xlink = ["href", "title", "show", "type", "role", "actuate"];
  var namespace_svg = "http://www.w3.org/2000/svg";
  var namespace_xlink = "http://www.w3.org/1999/xlink";

  return {

    // 设置svg字符串
    "set": function (target, svgstring) {
      if ('innerHTML' in SVGElement.prototype === false || 'innerHTML' in SVGSVGElement.prototype === false) {
        var frame = document.createElement("div"), i;
        frame.innerHTML = svgstring;
        var toSvgNode = function (htmlNode) {
          var svgNode = document.createElementNS(namespace_svg, (htmlNode.tagName + "").toLowerCase());
          var attrs = htmlNode.attributes, i;
          for (i = 0; attrs && i < attrs.length; i++) {
            if (xlink.indexOf(attrs[i].nodeName) >= 0) {
              // 针对特殊的svg属性，追加命名空间
              svgNode.setAttributeNS(namespace_xlink, 'xlink:' + attrs[i].nodeName, htmlNode.getAttribute(attrs[i].nodeName));
            } else {
              svgNode.setAttribute(attrs[i].nodeName, htmlNode.getAttribute(attrs[i].nodeName));
            }
          }
          return svgNode;
        };
        var rslNode = toSvgNode(frame.firstChild);
        (function toSVG(pnode, svgPnode) {
          var node = pnode.firstChild;
          if (node && node.nodeType == 3) {
            svgPnode.textContent = pnode.innerText;
            return;
          }
          while (node) {
            var svgNode = toSvgNode(node);
            svgPnode.appendChild(svgNode);
            if (node.firstChild) toSVG(node, svgNode);
            node = node.nextSibling;
          }
        })(frame.firstChild, rslNode);
        target.appendChild(rslNode);
      } else {
        // 如果当前浏览器提供了svg类型结点的innerHTML,我们还是使用浏览器提供的
        target.innerHTML = svgstring;
      }
    }

  };
});