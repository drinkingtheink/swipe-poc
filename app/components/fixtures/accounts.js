const accounts = [
    {
        'title': 'Free Checking',
        'account-number': '1234567890',
        'balance': {
            'dollars': '22,716',
            'cents': '75'
        },
        'payment-due': {
            'label': 'Payment Due',
            'dollars': '681',
            'cents': '00'
        },
        'payment-made': null,        
        'action': [
            {
                'label': 'Pay Now',
                'route': '#'
            },
            {
                'label': 'View More'
            }
        ],
        'next-day-date': {
            'label': 'Next Day',
            'month': 'Feb',
            'day': '10'
        },
        'icon': 'icon-graph'
    },
    {
        'title': 'Free Checking',
        'account-number': '0987654321',
        'balance': {
            'dollars': '2,888',
            'cents': '03'
        },
        'payment-due': null,
        'payment-made': {
            'label': 'Payment Made',
            'dollars': '167',
            'cents': '56'
        },        
        'action': null,
        'next-day-date': {
            'label': 'Next Day',
            'month': 'Dec',
            'day': '22'
        },
        'icon': 'icon-pie-chart',
        'cpfm-agg-account': true,
    },
    {
        'title': 'Free Checking',
        'account-number': '6785432180',
        'balance': {
            'dollars': '643',
            'cents': '09'
        },
        'payment-due': null,
        'payment-made': {
            'label': 'Payment Made',
            'dollars': '167',
            'cents': '56'
        },        
        'action': null,
        'next-day-date': null,
        'icon': 'icon-globe',
        'cpfm-agg-account': true,
    },
    {
        'title': 'Vacation Savings',
        'account-number': '66644433321',
        'balance': {
            'dollars': '6,432',
            'cents': '53'
        },
        'payment-due': null,
        'payment-made': {
            'label': 'Payment Made',
            'dollars': '740',
            'cents': '50'
        },        
        'action': [
            {
                'label': 'Deposit More',
                'route': '#'
            }
        ],
        'next-day-date': null,
        'icon': 'icon-plane'
    }
]

export default accounts;