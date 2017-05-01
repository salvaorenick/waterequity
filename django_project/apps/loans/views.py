from django.http import HttpResponse, JsonResponse
from django.conf import settings

import stripe


stripe.api_key = settings.STRIPE_SECRET_KEY


def createLoanView(request):
    if request.method != 'POST':
        return HttpResponse(status=404)

    try:
        amount = str(int(float(request.POST['amount']) * 100))
        emailAddress = request.POST['email-address']
        stripeToken = request.POST['stripeToken'],
        accept = request.POST['accept-terms'],

    except Exception:
        return JsonResponse({'message': 'Please fill out all the fields.'}, status=501)

    try:
        customer = stripe.Customer.create(
            email=request.POST['email-address'],
            source=request.POST['stripeToken'],
        )

    except stripe.error.StripeError as e:
        body = e.json_body
        err = body['error']
        return JsonResponse({'message': err['message'] }, status=401)

    try:
        stripe.Charge.create(
            amount=str(int(float(request.POST['amount']) * 100)),
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
