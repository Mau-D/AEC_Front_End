//paypal.js
//Par Maud Harvey
//Le 2 mai 2020
//Intégrer un bouton Paypal


    paypal.Button.render({
        // Configure environment
        env: 'sandbox',
        client: {
            sandbox: 'demo_sandbox_client_id',
            production: 'demo_production_client_id'
        },
        // Customize button (optional)
        locale: 'fr_CA',//Modifié pour mettre en français
        style: {
            size: 'large',//Modifié l'apparence
            color: 'blue',
            shape: 'rect',
        },

        // Enable Pay Now checkout flow (optional)
        commit: true,

        // Set up a payment
        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [{
                    amount: {
                        total: '30.11',
                        currency: 'USD',
                        details: {
                            subtotal: '30.00',
                            tax: '0.07',
                            shipping: '0.03',
                            handling_fee: '1.00',
                            shipping_discount: '-1.00',
                            insurance: '0.01'
                        }
                    },
                    description: 'The payment transaction description.',
                    custom: '90048630024435',
                    //invoice_number: '12345', Insert a unique invoice number
                    payment_options: {
                        allowed_payment_method: 'INSTANT_FUNDING_SOURCE'
                    },
                    soft_descriptor: 'ECHI5786786',
                    item_list: {
                        items: [
                            {
                                name: 'hat',
                                description: 'Brown hat.',
                                quantity: '5',
                                price: '3',
                                tax: '0.01',
                                sku: '1',
                                currency: 'USD'
                            },
                            {
                                name: 'handbag',
                                description: 'Black handbag.',
                                quantity: '1',
                                price: '15',
                                tax: '0.02',
                                sku: 'product34',
                                currency: 'USD'
                            }],
                        shipping_address: {
                            recipient_name: 'Brian Robinson',
                            line1: '4th Floor',
                            line2: 'Unit #34',
                            city: 'San Jose',
                            country_code: 'US',
                            postal_code: '95131',
                            phone: '011862212345678',
                            state: 'CA'
                        }
                    }
                }],
                note_to_payer: 'Contact us for any questions on your order.'
            });
        },
        // Execute the payment
        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                // Show a confirmation message to the buyer
                window.alert('Merci pour votre achat!');
            });
        }
    }, '#paypal-button');

