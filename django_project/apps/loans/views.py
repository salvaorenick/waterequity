from django.http import HttpResponse, JsonResponse
from django.conf import settings

import stripe


stripe.api_key = settings.STRIPE_SECRET_KEY


def createLoanView(request):
    if request.method != 'POST':
        return HttpResponse(status=404)

    try:
        amount = str(int(request.POST['amount']) * 100)

        customer = stripe.Customer.create(
            email=request.POST['email-address'],
            source=request.POST['stripeToken'],
        )

        stripe.Charge.create(
            amount=amount,
            currency='usd',
            customer=customer.id,
            metadata={
                'accept-terms': request.POST['accept-terms'],
            }
        )

    # Stripe errors. see https://stripe.com/docs/api/python#handling-errors
    except stripe.error.CardError as e:
        body = e.json_body
        err = body['error']
        return JsonResponse({'message': err['message']}, status=400)

    # System errors
    except Exception:
        return JsonResponse({'message': 'There was an issue with the system. Please try again later. Thank you.'}, status=501)

    return HttpResponse(status=200)
