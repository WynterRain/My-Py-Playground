import tweepy

consumer_key = 'onjviw5q5FbMo2vf3jUI7uuYY'
consumer_secret = 'hntyM0HLSLXLLgaNBZu03eavFLkFm6jm5VYO3fLS6ez4AsDgdY'
key = '1453424121568808967-FKgK5B1X735UKKKebx7tHvf9HZS8L2'
secret = '0y52zkswuoJQEx4DnyH8iCkhs6iLLY99307Ut8KwzXgo1'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(key, secret)

api = tweepy.API(auth)
api.update_status('Hey From Twitter Bot - Second Tweet!')

print("Status Updated!")