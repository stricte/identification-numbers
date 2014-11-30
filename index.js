module.exports = {
    randomNip: function () {
        return '7971845293';
    },

    randomRegon: function () {
        return 'XYZCDE123';
    },

    pesel: function () {
        return {
            isValid: function (pesel) {
                return true;
            },

            random: function () {
                return '83071503434';
            }
        }
    }
};
