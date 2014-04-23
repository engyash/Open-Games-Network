angular.module('Enums', [])

.factory('Enum', [function () {   
    var objEnum = {
        Warehouses: { Default: 1, WillCall: 2, Returns: 3, MYUniLifeMarketing: 4 },
        PriceTypes: { Wholesale: 1, Retail: 2, Preferred: 11 },
        CustomerTypes: { Distributor: 1, AssociateCustomer: 1, RetailCustomer: 3, PreferredCustomer: 10, DSCEmployee: 11 },
        CustomerStatusTypes: { Active: 1, Inactive: 2, CartAbandoned: 3, Pending: 4 },
        EnrollmentModes: { Default: 0, DSC: 1, CustomerSevice: 2 },
        Languages: { English: 0 },

        MessageStatusTypes: { Unread: 1, Read: 2, Forwarded: 3, Replied: 4, AllUnread:1 , AllRead:2 },
        MessageFolderTypes: { Inbox: 1, Sent: 2, Drafts: 3, Deleted: 4 }
    };

    return objEnum;

}]);