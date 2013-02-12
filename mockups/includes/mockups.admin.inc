<?php

function mockups_list() {
  $module_path = drupal_get_path('module', 'mockups');
  $module_css_path = "{$module_path}/css";
  $module_js_path = "{$module_path}/js";

  drupal_add_css("{$module_css_path}/mockups.css");
  drupal_add_css("{$module_css_path}/ui-lightness/jquery-ui-1.10.0.custom.min.css");
  drupal_add_js("{$module_js_path}/libraries/require/require.js");

  return '<div class="mockups"></div>';
}
