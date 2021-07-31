function showSupBanner() {
    var bannerDiv, styleStr, metaNode;
    new Date(2021, 1, 18) - new Date() < 0 ||
        (window.location.pathname.split("/")[1],
        "undefined" != typeof EMAD_LOPPO &&
            EMAD_LOPPO.current_path &&
            "/" !== EMAD_LOPPO.current_path.substr(-1) &&
            ((bannerDiv = document.createElement("div")),
            (metaNode = document.createElement("p")),
            bannerDiv.appendChild(metaNode),
            (styleStr = [
                "margin: 2rem 0",
                "padding: 1em",
                "background-color: #c4e0e1",
                "border-radius: 5px",
                "font-size: 90%",
                "color: #333333",
            ].join(";")),
            (metaNode.style = styleStr),
            (metaNode.innerHTML = ""),
            (metaNode = document.querySelector(".page-meta")) &&
                metaNode.parentElement.insertBefore(
                    bannerDiv,
                    metaNode.nextSibling
                )));
}
showSupBanner();
