import React from 'react';
import * as ImmutabilityHelper from './immutabilityHelper';
import * as Styles from './styles';

	
export function mergeStyles() {
    return ImmutabilityHelper.merge.apply(this, arguments);
}

export function mergeAndPrefix() {
	
    return Styles.mergeAndPrefix.apply(this, arguments);
}
