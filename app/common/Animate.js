
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Motion, spring } from 'react-motion';

/**
 * Animate Component
 * Wraps a set of children in a div that can be animated by any number
 * of style attributes. Expects to wrap children and can take an optional
 * className to attach to the div created. The cssProps configuration array
 * should contain objects matching the following format:
 * {
 *   prop: 'left', // CSS Property to Animate
 *   unit: '%', // Units of measure.
 *   bool: true|false, // Boolean toggle to swap values.
 *   true: 100, // Value to match against when true.
 *   false: 0, // Value to match against when false.
 * }
 */
export const Animate = ({
  cssProps,
  children,
  className,
}) => {
  const generateMotionStyle = (propsArray) => propsArray.reduce(
    (p, c) => Object.assign({}, p, {
      [c.prop]: spring(c.bool ? c.true : c.false),
    }), {});

  const generateDivStyles = (propsArray, ms) => propsArray.reduce(
    (p, c) => Object.assign({}, p, {
      [c.prop]: `${ms[c.prop]}${c.unit}`,
    }), {});

  const generatedMotionStyles = generateMotionStyle(cssProps);

  return (
    <Motion style = { generatedMotionStyles }>
      {
        (motionStyles) =>
          <div
            className = { classNames(className) }
            style = { generateDivStyles(cssProps, motionStyles) }
          >
            { children }
          </div>
      }
    </Motion>
  );
};

Animate.propTypes = {
  cssProps: PropTypes.array.isRequired,
  children: PropTypes.node,
  className: PropTypes.node,
};
