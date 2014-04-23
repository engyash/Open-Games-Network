angular.module('ranksJSON', [])

.service('$ranksJSON', function () {
    var Rank = [
        { RankID: 1, Description: "Bronze" },
        { RankID: 2, Description: "Silver" },
        { RankID: 3, Description: "Phase1, Gold, Jr. Manager" },
        { RankID: 4, Description: "Manager" },
        { RankID: 5, Description: "Sr. Manager" },
        { RankID: 6, Description: "Ex. Manager" },
        { RankID: 7, Description: "Director" },
        { RankID: 8, Description: "Sr. Director" },
        { RankID: 9, Description: "Ex. Director" },
        { RankID: 10, Description: "Presidential Direc.." },
        { RankID: 11, Description: "Pres. Sapphire" },
        { RankID: 12, Description: "Pres. Ruby" },
        { RankID: 13, Description: "Pres. Diamond" }
    ];
   var Period = [
        { PeriodID: 1, Description: "January 2013" },
        { PeriodID: 2, Description: "February 2013" },
        { PeriodID: 3, Description: "March 2013" },
        { PeriodID: 4, Description: "April 2013" },
        { PeriodID: 5, Description: "May 2013" },
        { PeriodID: 6, Description: "June 2013" },
        { PeriodID: 7, Description: "July 2013" },
        { PeriodID: 8, Description: "August 2013" },
        { PeriodID: 9, Description: "September 2013" },
        { PeriodID: 10, Description: "October 2013" },
        { PeriodID: 11, Description: "November 2013" },
        { PeriodID: 12, Description: "December 2013" },
        { PeriodID: 13, Description: "January 2014" },
        { PeriodID: 14, Description: "February 2014" },
        { PeriodID: 15, Description: "March 2014" },
        { PeriodID: 16, Description: "April 2014" },
        { PeriodID: 17, Description: "May 2014" },
        { PeriodID: 18, Description: "June 2014" },
        { PeriodID: 19, Description: "July 2014" },
        { PeriodID: 20, Description: "August 2014" },
        { PeriodID: 21, Description: "September 2014" },
        { PeriodID: 22, Description: "October 2014" },
        { PeriodID: 23, Description: "November 2014" },
        { PeriodID: 24, Description: "December 2014" },
        { PeriodID: 25, Description: "January 2015" },
        { PeriodID: 26, Description: "February 2015" },
        { PeriodID: 27, Description: "March 2015" },
        { PeriodID: 28, Description: "April 2015" },
        { PeriodID: 29, Description: "May 2015" },
        { PeriodID: 30, Description: "June 2015" }
    ];
    var data = { Periods: Period, Ranks: Rank };
    return {
        get: function () {
            return data;
        }
    };
});