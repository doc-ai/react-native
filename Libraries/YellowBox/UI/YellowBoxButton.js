/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

const React = require('React');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const YellowBoxPressable = require('YellowBoxPressable');
const YellowBoxStyle = require('YellowBoxStyle');

import type {EdgeInsetsProp} from 'EdgeInsetsPropType';

type Props = $ReadOnly<{|
  hitSlop?: ?EdgeInsetsProp,
  label: string,
  onPress: () => void,
|}>;

const YellowBoxButton = (props: Props): React.Node => (
  <YellowBoxPressable
    hitSlop={props.hitSlop}
    onPress={props.onPress}
    style={styles.root}>
    <Text numberOfLines={1} style={styles.label}>
      {props.label}
    </Text>
  </YellowBoxPressable>
);

const styles = StyleSheet.create({
  root: {
    borderRadius: 14,
    height: 28,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  label: {
    color: YellowBoxStyle.getTextColor(1),
    fontSize: 12,
    includeFontPadding: false,
    lineHeight: 16,
  },
});

module.exports = YellowBoxButton;
