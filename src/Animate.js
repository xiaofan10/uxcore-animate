/**
 * Animate Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const RcAnimate = require('rc-animate');

class Animate extends RcAnimate {}

Animate.defaultProps = RcAnimate.defaultProps;


// http://facebook.github.io/react/docs/reusable-components.html
Animate.propTypes = RcAnimate.propTypes;

Animate.displayName = 'Animate';

module.exports = Animate;
