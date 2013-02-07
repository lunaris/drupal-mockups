<?php

function mockup_list() {
  $module_path = drupal_get_path('module', 'mockup');
  $module_css_path = "{$module_path}/css";
  $module_js_path = "{$module_path}/js";

  $require_js = array(
    '#type' => 'html_tag',
    '#tag' => 'script',
    '#attributes' => array(
      'data-main' => "/{$module_js_path}/main",
      'src' => "/{$module_js_path}/libraries/require/require.js",
    ),
    '#weight' => 99999,
  );

  //drupal_add_html_head($require_js, 'mockup_require_js');

  return '<div class="mockup"></div>';
}
