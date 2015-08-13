import * as AutoPrefix from  '../styles/autoPrefix';
import  * as ImmutabilityHelper from '../utils/immutabilityHelper';
export  function mergeAndPrefix() {
    let mergedStyles = ImmutabilityHelper.merge.apply(this, arguments);
    return AutoPrefix.all(mergedStyles);
}



