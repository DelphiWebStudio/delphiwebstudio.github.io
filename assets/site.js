(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var navigation = document.querySelector('#primary-navigation');
  function closeNavigation(restoreFocus) {
    if (!toggle || !navigation) return;
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    if (restoreFocus) toggle.focus();
  }
  if (toggle && navigation) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      navigation.classList.toggle('is-open', open);
    });
    navigation.addEventListener('click', function (event) { if (event.target.closest('a')) closeNavigation(false); });
    document.addEventListener('pointerdown', function (event) { if (header && !header.contains(event.target)) closeNavigation(false); });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { event.preventDefault(); closeNavigation(true); }
    });
    window.matchMedia('(min-width: 861px)').addEventListener('change', function () { closeNavigation(false); });
  }

  var tabs = Array.from(document.querySelectorAll('.workflow-tabs [role="tab"]'));
  function activateTab(tab) {
    tabs.forEach(function (item) {
      var active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      var panel = document.getElementById(item.getAttribute('aria-controls'));
      if (panel) panel.hidden = !active;
    });
  }
  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { activateTab(tab); });
    tab.addEventListener('keydown', function (event) {
      var next = index;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault(); activateTab(tabs[next]); tabs[next].focus();
    });
  });

  var dialog = document.querySelector('.image-dialog');
  var previousFocus;
  if (dialog && typeof dialog.showModal === 'function') {
    document.querySelectorAll('a[data-lightbox]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault(); previousFocus = link;
        var original = link.querySelector('img');
        var image = dialog.querySelector('.dialog-image');
        image.src = link.href;
        image.alt = original ? original.alt : 'Application screenshot';
        dialog.querySelector('.dialog-caption').textContent = link.dataset.caption || image.alt;
        dialog.querySelector('#image-dialog-title').textContent = original ? original.alt : 'Application screenshot';
        document.body.classList.add('modal-open');
        dialog.showModal(); dialog.querySelector('.dialog-close').focus();
      });
    });
    dialog.querySelector('.dialog-close').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', function () { document.body.classList.remove('modal-open'); if (previousFocus && previousFocus.isConnected) previousFocus.focus({ preventScroll: true }); });
  }

  var search = document.querySelector('#guide-search');
  if (search) {
    var cards = Array.from(document.querySelectorAll('[data-guide]'));
    var status = document.querySelector('#guide-filter-status');
    var empty = document.querySelector('#guide-empty');
    search.addEventListener('input', function () {
      var query = search.value.trim().toLocaleLowerCase();
      var count = 0;
      cards.forEach(function (card) { var show = !query || (card.textContent + ' ' + (card.dataset.keywords || '')).toLocaleLowerCase().includes(query); card.hidden = !show; if (show) count++; });
      if (status) status.textContent = count === cards.length ? 'All seven guides are available below.' : count + (count === 1 ? ' guide matches your search.' : ' guides match your search.');
      if (empty) empty.hidden = count !== 0;
    });
  }

  document.querySelectorAll('[data-copy]').forEach(function (button) {
    button.addEventListener('click', async function () {
      var value = button.dataset.copy;
      var group = button.closest('.checksum-details');
      var status = group && group.querySelector('.copy-status');
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(value);
        if (status) status.textContent = 'SHA-256 fingerprint copied.';
      } catch (_) {
        var code = group && group.querySelector('.checksum-code');
        if (code) { var range = document.createRange(); range.selectNodeContents(code); var selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); }
        if (status) status.textContent = 'Fingerprint selected. Press Ctrl+C, or use your browser’s Copy command.';
      }
    });
  });

  // The same floating website widget used by the Atlas pages. Product names stay in English.
  window.gtranslateSettings = { default_language: 'en', languages: ['ar','bg','bn','cs','de','el','en','es','fa','fi','tl','fr','he','hi','hr','hu','id','it','ja','ko','pl','ps','pt','ro','ru','sk','sr','sv','th','tr','uk','ur','vi','zh-CN','zh-TW'], native_language_names: true, detect_browser_language: true, wrapper_selector: '.gtranslate_wrapper', switcher_horizontal_position: 'right', switcher_vertical_position: 'bottom', alt_flags: { he: 'https://cdn.gtranslate.net/flags/svg/iw.svg' } };
  if (document.querySelector('.gtranslate_wrapper')) {
    var vendor = document.createElement('script');
    vendor.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    vendor.async = true;
    var helper = document.createElement('script');
    helper.src = 'assets/translation-selector.js';
    helper.defer = true;
    document.head.appendChild(helper);
    document.head.appendChild(vendor);
  }
})();
