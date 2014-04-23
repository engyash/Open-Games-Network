angular.module('websiteProfileDetailJSON', [])

.service('$websiteProfileDetailJSON', function () {
    var GetWebsiteProfile = [
                {    
                    'CustomerID': 1,
                    'Title': 'BUSINESS OPPORTUNITY',
                    'Description': 'Are you living your dream? Stewart Hughes, josephs\'s Chairman & CEO, explains how josephs is the place to make your dreams a reality. As a former franchise partner, and now the owner and CEO of josephs, Stewart provides his unique perspective of why josephs is the place to help you live your dreams.',
                    'media': './assets/img/websiteTheme.png'
                },
                {
                    'CustomerID': 2,
                    'Title': 'PERSONAL TRAINER',
                    'Description': 'More than getting healthy or losing weight, josephs products aim to encourage an ambitious vision of success—but you don’t have to do it alone. The 13-week josephs Transformation pairs each participant with a personal coach who provides education, accountability, and guidance for individuals truly committed to their own exceptional endeavors.',
                    'media': './assets/img/websiteTheme.png'
                },
                {
                    'CustomerID': 3,
                    'Title': 'MEDICAL',
                    'Description': 'Balance has an enduring, medically-proven track record of success. Based on the patented, clinically proven Bios Life formula, taking Balance correctly and consistently will help provide a more mild release of both glucose and insulin into your system. Then, as those levels reduce, your body can finally use its fats cells for energy—burning away those fat reserves',
                    'media': './assets/img/websiteTheme.png'
                },
                {
                    'CustomerID': 4,
                    'Title': 'STAY AT HOME',
                    'Description': 'With josephs\'s PRIME CHALLENGE, you determine what your prime is. This 90-day journey anyone is available to anyone, and is flexible depending on various professions and lifestyles. The Prime Challenge is a program that is tailored to individual needs, and yieldspositive outcomes',
                    'media': './assets/img/websiteTheme.png'
                },
                {
                    'CustomerID': 5,
                    'Title': 'josephs',
                    'Description': 'josephs\'s PRIME CHALLENGE is a 90-day journey anyone can go on. It starts with defining your own prime and taking josephs products for the first time; it ends, three months later, living the prime life. Taking on the Prime Challenge allows you to take control of your life and live to your own prime',
                    'media': './assets/img/websiteTheme.png'
                }
    ];
    return {
        get: function () {

            return GetWebsiteProfile;
        }
    };
});