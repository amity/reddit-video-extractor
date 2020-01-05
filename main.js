'use strict';

function getLink({linkUrl}) {
  fetch(linkUrl + '.json').then(resp =>
    resp.json().then(pageJson =>
      window.prompt("Copy to clipboard: Cmd+C, Enter",
        pageJson[0].data.children[0].data.secure_media.reddit_video.fallback_url + '.gif'
      )
    )
  )
}

chrome.contextMenus.create({
  title: "Get direct video link",
  contexts:["link"],  // ContextType
  onclick: getLink // A callback function
 });

