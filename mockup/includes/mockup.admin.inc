<?php

function mockup_list() {
  $module_path = drupal_get_path('module', 'mockup');
  $module_css_path = "{$module_path}/css";
  $module_js_path = "{$module_path}/js";

  drupal_add_js("{$module_js_path}/libraries/require/require.js");

  return '<div class="mockup"></div>';
}
