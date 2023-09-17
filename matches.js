function onMutation(mutations) {
  mo.disconnect();

  for (let mutation of mutations) {
    if (mutation.type === "childList") {
      for (let node of mutation.addedNodes) {
        console.log(node, "was added");
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
