import react, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import SearchBar from '../components/SearchBar'
import axios from 'axios'
import Article from '../components/Article'

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('')
  const [articles, setArticles] = useState([])

  const searchArticles = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?language=en&apiKey=1f46fa2db34245e5b034a2971796e443',
        {
          params: {
            q: searchText,
          },
        }
      )
      .then((response) => {
        // handle success
        setArticles(response.data.articles)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }
  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={searchArticles}
      />
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
