from django.shortcuts import render
import tweepy
import config
from .forms import PostForm

# Create your views here.
def tweets_list(request):
    tweet_list = []
    form = PostForm(request.POST or None)
    if request.method == 'POST':
        if form.is_valid():
            name = form.cleaned_data['name']
            auth = tweepy.OAuthHandler(config.consumer_key, config.consumer_secret)
            auth.set_access_token(config.access_token, config.access_token_secret)
            api = tweepy.API(auth)

            results = api.search(q=name, rpp=50, count=50, show_user=True)
            #print(results[0])
            for tweet in results:
                tweet_list.append((tweet.text.encode("utf-8", errors='ignore'), tweet.id, tweet.user.name))
    else:
        form = PostForm()
    return render(request, 'tweetslist/base.html', {'form': form, 'tweet_list': tweet_list})
