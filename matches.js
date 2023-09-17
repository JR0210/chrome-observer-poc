function onMutation(mutations) {
  mo.disconnect();

  for (let mutation of mutations) {
    if (mutation.type === "childList") {
      for (let node of mutation.addedNodes) {
        const includesUl = [...node.childNodes].find(
          (child) => child.nodeName === "UL"
        );
        console.log(includesUl, "includesUl");
        if (
          typeof includesUl !== "undefined" &&
          includesUl.getAttribute("data-testid") === "desktop-search"
        ) {
          const listings = [...includesUl.childNodes];
          console.log(listings, "listings");
        }
      }
    }
  }

  observe();
}

function observe() {
  mo.observe(document.body, {
    subtree: true,
    childList: true,
  });
}

const mo = new MutationObserver(onMutation);

observe();
