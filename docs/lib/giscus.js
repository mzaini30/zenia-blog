(function () {
  /* eslint-disable no-unused-vars */
  var fixedPath = location.href.replace("/-/", "/#/");
  if (fixedPath !== location.href) {
    location.href = fixedPath;
  }

  function install(hook, vm) {
    var dom = Docsify.dom;
    // var disqus = vm.config.disqus;
    // if (!disqus) {
    //   throw Error('$docsify.disqus is required');
    // }

    hook.init(function (_) {
      // var script = dom.create('script');
      // script.async = true;
      // script.src = "https://" + disqus + ".disqus.com/embed.js";
      // script.setAttribute('data-timestamp', Number(new Date()));
      // dom.appendTo(dom.body, script);
    });

    hook.mounted(function (_) {
      // var div = dom.create('div');
      // div.id = 'disqus_thread';
      // var main = dom.getNode('#main');
      // div.style = "width: " + (main.clientWidth) + "px; margin: 0 auto 20px;";
      // dom.appendTo(dom.find('.content'), div);
      // // eslint-disable-next-line
      // window.disqus_config = function() {
      //   this.page.url = location.origin + '/-' + vm.route.path;
      //   this.page.identifier = vm.route.path;
      //   this.page.title = document.title;
      // };
    });

    hook.doneEach(function (_) {
      /* <script src="https://giscus.app/client.js"
                data-repo="mzaini30/zenia-blog"
                data-repo-id="R_kgDOHjHjEg"
                data-category="Announcements"
                data-category-id="DIC_kwDOHjHjEs4CP2NA"
                data-mapping="pathname"
                data-reactions-enabled="1"
                data-emit-metadata="0"
                data-input-position="bottom"
                data-theme="light"
                data-lang="id"
                crossorigin="anonymous"
                async>
        </script> */

      let giscus = dom.create("script");
      giscus.src = "https://giscus.app/client.js";
      giscus.dataset.repo = "mzaini30/zenia-blog";
      giscus.dataset.repoId = "R_kgDOHjHjEg";
      giscus.dataset.category = "Announcements";
      giscus.dataset.categoryId = "DIC_kwDOHjHjEs4CP2NA";
      giscus.dataset.mapping = "pathname";
      giscus.dataset.reactionsEnabled = "1";
      giscus.dataset.emitMetadata = "0";
      giscus.dataset.inputPosition = "top";
      giscus.dataset.theme = "light";
      giscus.dataset.lang = "id";
      giscus.crossorigin = "anonymous";
      giscus.async = true;
      dom.appendTo(dom.find("article.markdown-section"), giscus);

      // var div = dom.create('div');
      // dom.appendTo(dom.find('.content'), div);

      // if (typeof window.DISQUS !== 'undefined') {
      //   window.DISQUS.reset({
      //     reload: true,
      //     config: function() {
      //       this.page.url = location.origin + '/-' + vm.route.path;
      //       this.page.identifier = vm.route.path;
      //       this.page.title = document.title;
      //     },
      //   });
      // }
    });
  }

  $docsify.plugins = [].concat(install, $docsify.plugins);
})();
