/**
 * @file index.ts.
 */

import Vue from 'vue'
import Component from 'vue-class-component'
import withRender from './template.html'

@withRender
@Component
export default class Top extends Vue {}
