angular.module('josephsCalculateOrderJSON', [])

.service('$josephsCalculateOrderJSON', function () {
    var _calculateOrder = {
        "CalculateOrder": {
            "Total": "112.0200",
            "SubTotal": "94.8500",
            "TaxTotal": "7.7800",
            "ShippingTotal": "9.3900",
            "DiscountTotal": "0.0000",
            "DiscountPercent": "0.0000",
            "WeightTotal": "7.0000",
            "BusinessVolumeTotal": "95.0000",
            "CommissionableVolumeTotal": "95.0000",
            "Other1Total": "0.0000",
            "Other2Total": "0.0000",
            "Other3Total": "0.0000",
            "Other4Total": "0.0000",
            "Other5Total": "0.0000",
            "Other6Total": "0.0000",
            "Other7Total": "0.0000",
            "Other8Total": "0.0000",
            "Other9Total": "0.0000",
            "Other10Total": "0.0000",
            "ShippingTax": "0.0000",
            "OrderTax": "7.7800",
            "FedTaxTotal": "0.0000",
            "StateTaxTotal": "2.7500",
            "Details": {
                "OrderDetailResponse": [
                  {
                      "ItemCode": "E1003",
                      "Description": "Professional",
                      "Quantity": "1.0000",
                      "PriceEach": "49.9500",
                      "PriceTotal": "49.9500",
                      "Tax": "4.1000",
                      "WeightEach": "5.0000",
                      "Weight": "5.00000000",
                      "BusinessVolumeEach": "50.0000",
                      "BusinesVolume": "50.0000",
                      "CommissionableVolumeEach": "50.0000",
                      "CommissionableVolume": "50.0000",
                      "Other1Each": "0.0000",
                      "Other1": "0.0000",
                      "Other2Each": "0.0000",
                      "Other2": "0.0000",
                      "Other3Each": "0.0000",
                      "Other3": "0.0000",
                      "Other4Each": "0.0000",
                      "Other4": "0.0000",
                      "Other5Each": "0.0000",
                      "Other5": "0.0000",
                      "Other6Each": "0.0000",
                      "Other6": "0.0000",
                      "Other7Each": "0.0000",
                      "Other7": "0.0000",
                      "Other8Each": "0.0000",
                      "Other8": "0.0000",
                      "Other9Each": "0.0000",
                      "Other9": "0.0000",
                      "Other10Each": "0.0000",
                      "Other10": "0.0000",
                      "Taxable": "49.9500",
                      "FedTax": "0.0000",
                      "StateTax": "1.4500",
                      "CityTax": "1.7283",
                      "CityLocalTax": "0.0000",
                      "CountyTax": "0.3746",
                      "CountyLocalTax": "0.5495",
                      "ManualTax": "0.0000",
                      "IsStateTaxOverride": "false",
                      "OrderLine": "0"
                  }
                ]
            },
            "ShipMethods": {
                "ShipMethodResponse": [
                  {
                      "ShipMethodID": "3",
                      "Description": "FedEx Express (2 Business days)",
                      "ShippingAmount": "17.8500"
                  },
                  {
                      "ShipMethodID": "2",
                      "Description": "FedEx Priority (3 Business days)",
                      "ShippingAmount": "14.8500"
                  },
                  {
                      "ShipMethodID": "1",
                      "Description": "FedEx Ground",
                      "ShippingAmount": "9.3900"
                  },
                  {
                      "ShipMethodID": "12",
                      "Description": "International Economy",
                      "ShippingAmount": "27.3400"
                  },
                  {
                      "ShipMethodID": "13",
                      "Description": "International Priority",
                      "ShippingAmount": "44.2200"
                  },
                  {
                      "ShipMethodID": "10",
                      "Description": "Do Not Ship",
                      "ShippingAmount": "0.0000"
                  }
                ]
            },
            "Warnings": ""
        }
    };
    return {
        get: function () {
            return _calculateOrder.CalculateOrder;
        }
    };
});