var BigNumber = require('bignumber.js');

module.exports = {
    /**
     *
     * @param {Number} height
     * @return {BigNumber}
     */
    getTotalSupplyByHeight: function (height) {
        return (new BigNumber(10000000000)).plus((height - 2000) * 950);
    }

};
