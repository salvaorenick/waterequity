from django.http import HttpResponse

import stripe

from django.conf import settings

stripe.api_key = settings.STRIPE_SECRET_KEY


def createLoanView(request):
    if request.method != 'POST':
	return HttpResponse(status=404)

    try:
        charge = stripe.Charge.create(
            amount=request.POST['amount'],
            source=request.POST['stripeToken'],
            currency='usd',
            metadata={
                'loan-option':request.POST['loan-option'],
                'accept-terms':request.POST['accept-terms'],
            }
        )

    except Exception:
        return HttpResponse(status=500)
        # return self.form_invalid(form)

    return HttpResponse(status=200)
