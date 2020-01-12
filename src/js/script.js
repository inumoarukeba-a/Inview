'use strict'

/**
 * CSS
 */
import '../scss/style.scss'

/**
 * Polyfill
 */
import elementClosest from 'element-closest'
elementClosest(window)

/**
 * Script
 */
import _Inview from './_module/Inview'
new _Inview()
