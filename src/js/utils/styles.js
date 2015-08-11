import * as AutoPrefix from  '../styles/auto-prefix';
import  * as ImmutabilityHelper from '../utils/immutability-helper';
export  function mergeAndPrefix() {
	
    let mergedStyles = ImmutabilityHelper.merge.apply(this, arguments);
    return AutoPrefix.all(mergedStyles);
}



