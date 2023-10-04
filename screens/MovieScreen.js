import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';
import MovieList from '../components/movieList';
import Loading from '../components/loading';
import { fallbackMovieUrl, fetchMovieCredits, fetchMovieDetails, fetchSimilarMovie, img500 } from '../api/moviedb';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == "ios";
const topMargin = ios ? '' : 'mt-3';

export default function MovieScreen() {
    const { params: item } = useRoute();
    const [isFavourite, toggleFavourite] = useState(false);
    const navigation = useNavigation();
    let movieName = "The Tomorrow War";
    const [cast, setCast] = useState([]);
    const [movieDetails, setMovieDetails] = useState({});
    const [movieCredits, setMovieCredits] = useState({});
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        //call movie api
        // console.log('itemid', item.id);
        getMovieDetails(item.id);
        getMovieCredits(item.id);
        getSimilarMovie(item.id);
    }, [item]);

    const getMovieDetails = async (id) => {
        const data = await fetchMovieDetails(id);
        if (data) setMovieDetails(data);
    }

    const getMovieCredits = async (id) => {
        const data = await fetchMovieCredits(id);
        if (data && data.cast) setCast(data.cast);
    }

    const getSimilarMovie = async id => {
        const data = await fetchSimilarMovie(id);
        if (data && data.results) setSimilarMovies(data.results);
        // console.log("similar movies:", data);
    }

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900"
        >
            {/* back button and movie poster */}
            <View className="w-full">
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between item-center px-4" + topMargin}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                        <HeartIcon size="35" strokeWidth={3} color={isFavourite ? theme.background : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>
                {
                    loading ? (
                        <Loading />
                    ) : (
                        <View>
                            <Image
                                // source={require('../assets/movie.jpg')}
                                source={{ uri: img500(movieDetails.poster_path) } || fallbackMovieUrl}
                                style={{ width, height: height * 0.55 }}
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                                style={{ width, height: height * 0.40 }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                className="absolute bottom-0"
                            />
                        </View>
                    )
                }
            </View>
            {/* movie details */}
            <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                {/* title */}
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {movieDetails.title}
                </Text>
                {/* status,releast ,runtime */}
                {movieDetails.id ? (
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        {movieDetails.status} . {movieDetails?.release_date?.split('-')[0]} . {movieDetails.runtime} min
                    </Text>
                ) : null}

                {/* genres */}
                <View className="flex-row justify-center mx-4 space-x-2">
                    {movieDetails?.genres?.map((genre, index) => {
                        let showDot = index + 1 != movieDetails.genres.length;
                        return (
                            <Text key={index} className="text-neutral-400 font-semibold text-base text-center">
                                {genre.name} {showDot ? "." : null}
                            </Text>
                        )
                        {/* <Text className="text-neutral-400 font-semibold text-base text-center">
                        Thrill .
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Comedy
                    </Text> */}
                    })
                    }
                </View>

                {/* description */}
                <Text className="text-neutral-400 mx-4 tracking-wide text-center">
                    {movieDetails.overview}
                </Text>

                {/* cast */}
                {cast.length > 0 && <Cast navigation={navigation} cast={cast} />}

                {/* similar movies */}
                {similarMovies.length > 0 && <MovieList title="similar movies" hideSeeAll={true} data={similarMovies} />}
            </View>
        </ScrollView >
    )
}