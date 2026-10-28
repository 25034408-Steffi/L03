import React from 'react';
import { ScrollView } from 'react-native';
import Movie from './components/Movie.js';


class AllMovies extends React.Component {
    render() {
        return (
            <ScrollView>
                <Movie
                    title="Doctor Sleep"
                    year={2019}
                    icon_name="skull"
                    icon_color="#850101"
                    poster={require("./img/doctor-sleep.jpg")}
                    />
                <Movie
                    title="Midway"
                    year={2020}
                    icon_name="person-rifle"
                    icon_color="#850101"
                    poster={require("./img/midway.jpg")}
                />
                <Movie
                    title="A Minecraft Movie"
                    year={2025}
                    icon_name="cube"
                    icon_color="#850101"
                    poster={{
                        uri: "https://images.techeblog.com/wp-content/uploads/2025/03/01093040/a-minecraft-movie-final-trailer.jpg"
                    }}
                />

            </ScrollView>
        )
    }
}

export default AllMovies;
