angular.module('trackerJSON', [])

.service('$trackerJSON', function () {
    var data =
        {
            GetAllRanksAllPeriodsQualificationsResult: {
                GetRankQualificationsResponses: [
                              {
                                  RankID: 4,
                                  CustomerID: '96342802',
                                  PeriodID: 13,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 125,
                                                    Required: 194,
                                                    Qualifies: true
                                                }
                                  ],
                                  Qualifies: true
                              },
                              {
                                  RankID: 6,
                                  CustomerID: '96342802',
                                  PeriodID: 13,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 125,
                                                    Required: 194,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 493,
                                                    Required: 500,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 2000,
                                                    Required: 65069,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 1000,
                                                    Required: 63047,
                                                    Qualifies: true
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 7,
                                  CustomerID: '96342802',
                                  PeriodID: 13,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 125,
                                                    Required: 194,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 493,
                                                    Required: 500,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 5000,
                                                    Required: 65069,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 1000,
                                                    Required: 63047,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 1000,
                                                    Required: 1321,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 701,
                                                    Required: 1000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 2000,
                                                    Required: 2022,
                                                    Qualifies: true
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 8,
                                  CustomerID: '96342802',
                                  PeriodID: 13,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 125,
                                                    Required: 194,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 493,
                                                    Required: 500,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 10000,
                                                    Required: 65069,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 1000,
                                                    Required: 63047,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 1000,
                                                    Required: 1321,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 701,
                                                    Required: 1000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 2022,
                                                    Required: 4000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 9,
                                  CustomerID: '96342802',
                                  PeriodID: 13,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 125,
                                                    Required: 194,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 493,
                                                    Required: 500,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 10000,
                                                    Required: 65069,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 10000,
                                                    Required: 63047,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 1000,
                                                    Required: 1321,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 701,
                                                    Required: 1000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 2022,
                                                    Required: 10000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 10,
                                  CustomerID: '96342802',
                                  PeriodID: 13,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 19,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 493,
                                                    Required: 500,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 6506,
                                                    Required: 50000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 630,
                                                    Required: 3000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 1321,
                                                    Required: 3000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 701,
                                                    Required: 3000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 2022,
                                                    Required: 20000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 11,
                                  CustomerID: '96342802',
                                  PeriodID: 13,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 14,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 493,
                                                    Required: 500,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 65069,
                                                    Required: 100000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 630,
                                                    Required: 5000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 1321,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 701,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 2022,
                                                    Required: 40000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 12,
                                  CustomerID: '96342802',
                                  PeriodID: 13,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 100,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 493,
                                                    Required: 500,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 65069,
                                                    Required: 150000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 63047,
                                                    Required: 50000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 1321,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 701,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 2022,
                                                    Required: 60000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 13,
                                  CustomerID: '96342802',
                                  PeriodID: 13,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 194,
                                                    Required: 1025,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 493,
                                                    Required: 500,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 65069,
                                                    Required: 250000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 63047,
                                                    Required: 500000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 1321,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 701,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 2022,
                                                    Required: 100000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 4,
                                  CustomerID: '96342802',
                                  PeriodID: 12,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 94,
                                                    Required: 125,
                                                    Qualifies: true
                                                }
                                  ],
                                  Qualifies: true
                              },
                              {
                                  RankID: 6,
                                  CustomerID: '96342802',
                                  PeriodID: 12,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 78,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 129,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 91882,
                                                    Required: 20000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 87206,
                                                    Required: 100000,
                                                    Qualifies: true
                                                }
                                  ],
                                  Qualifies: true
                              },
                              {
                                  RankID: 7,
                                  CustomerID: '96342802',
                                  PeriodID: 12,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 244,
                                                    Required: 1205,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1269,
                                                    Required: 5000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 91882,
                                                    Required: 150000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 87206,
                                                    Required: 110000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 3532,
                                                    Required: 10000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 1144,
                                                    Required: 10000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 4676,
                                                    Required: 20000,
                                                    Qualifies: true
                                                }
                                  ],
                                  Qualifies: true
                              },
                              {
                                  RankID: 8,
                                  CustomerID: '96342802',
                                  PeriodID: 12,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 24,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1269,
                                                    Required: 5000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 91882,
                                                    Required: 210000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 87206,
                                                    Required: 100000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 3532,
                                                    Required: 10000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 1144,
                                                    Required: 10000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 4676,
                                                    Required: 40000,
                                                    Qualifies: true
                                                }
                                  ],
                                  Qualifies: true
                              },
                              {
                                  RankID: 9,
                                  CustomerID: '96342802',
                                  PeriodID: 12,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 244,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1269,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 91882,
                                                    Required: 25000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 87206,
                                                    Required: 1000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 3532,
                                                    Required: 1000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 1144,
                                                    Required: 1000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 4676,
                                                    Required: 10000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 10,
                                  CustomerID: '96342802',
                                  PeriodID: 12,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 244,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1269,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 91882,
                                                    Required: 50000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 87206,
                                                    Required: 3000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 3532,
                                                    Required: 3000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 1144,
                                                    Required: 3000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 4676,
                                                    Required: 20000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 11,
                                  CustomerID: '96342802',
                                  PeriodID: 12,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 244,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1269,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 91882,
                                                    Required: 100000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 87206,
                                                    Required: 5000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 3532,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 1144,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 4676,
                                                    Required: 40000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 12,
                                  CustomerID: '96342802',
                                  PeriodID: 12,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 244,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1269,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 91882,
                                                    Required: 150000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 87206,
                                                    Required: 5000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 3532,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 1144,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 4676,
                                                    Required: 60000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 13,
                                  CustomerID: '96342802',
                                  PeriodID: 12,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 244,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1269,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 91882,
                                                    Required: 250000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 87206,
                                                    Required: 5000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 3532,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 1144,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 4676,
                                                    Required: 100000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 4,
                                  CustomerID: '96342802',
                                  PeriodID: 11,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 192,
                                                    Required: 125,
                                                    Qualifies: true
                                                }
                                  ],
                                  Qualifies: true
                              },
                              {
                                  RankID: 6,
                                  CustomerID: '96342802',
                                  PeriodID: 11,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 192,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1278,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 110739,
                                                    Required: 2000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 106895,
                                                    Required: 1000,
                                                    Qualifies: true
                                                }
                                  ],
                                  Qualifies: true
                              },
                              {
                                  RankID: 7,
                                  CustomerID: '96342802',
                                  PeriodID: 11,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 192,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1278,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 110739,
                                                    Required: 5000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 106895,
                                                    Required: 1000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 2931,
                                                    Required: 1000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 913,
                                                    Required: 1000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 3844,
                                                    Required: 2000,
                                                    Qualifies: true
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 8,
                                  CustomerID: '96342802',
                                  PeriodID: 11,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 192,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1278,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 110739,
                                                    Required: 10000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 106895,
                                                    Required: 1000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 2931,
                                                    Required: 1000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 913,
                                                    Required: 1000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 3844,
                                                    Required: 4000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 9,
                                  CustomerID: '96342802',
                                  PeriodID: 11,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 192,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1278,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 110739,
                                                    Required: 25000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 106895,
                                                    Required: 1000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 2931,
                                                    Required: 1000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 913,
                                                    Required: 1000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 3844,
                                                    Required: 10000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 10,
                                  CustomerID: '96342802',
                                  PeriodID: 11,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 192,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1278,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 110739,
                                                    Required: 50000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 106895,
                                                    Required: 3000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 2931,
                                                    Required: 3000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 913,
                                                    Required: 3000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 3844,
                                                    Required: 20000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 11,
                                  CustomerID: '96342802',
                                  PeriodID: 11,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 192,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1278,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 110739,
                                                    Required: 100000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 106895,
                                                    Required: 5000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 2931,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 913,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 3844,
                                                    Required: 40000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 12,
                                  CustomerID: '96342802',
                                  PeriodID: 11,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 192,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1278,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 110739,
                                                    Required: 150000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 106895,
                                                    Required: 5000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 2931,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 913,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 3844,
                                                    Required: 60000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              },
                              {
                                  RankID: 13,
                                  CustomerID: '96342802',
                                  PeriodID: 11,
                                  PayeeQualificationLegs: [
                                                {
                                                    QualificationDescription: 'pv',
                                                    Actual: 192,
                                                    Required: 125,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'gv',
                                                    Actual: 1278,
                                                    Required: 500,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'ov',
                                                    Actual: 110739,
                                                    Required: 250000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'leg1',
                                                    Actual: 106895,
                                                    Required: 5000,
                                                    Qualifies: true
                                                },
                                                {
                                                    QualificationDescription: 'leg2',
                                                    Actual: 2931,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg12',
                                                    Actual: 913,
                                                    Required: 5000,
                                                    Qualifies: false
                                                },
                                                {
                                                    QualificationDescription: 'ov_minus_leg1',
                                                    Actual: 3844,
                                                    Required: 100000,
                                                    Qualifies: false
                                                }
                                  ],
                                  Qualifies: false
                              }
                ],
                Result: {
                    Status: 'Success',
                    Errors: [],
                    TransactionKey: ''
                }
            }
        };
    return {
        get: function () {
            return data;
        }
    };
});