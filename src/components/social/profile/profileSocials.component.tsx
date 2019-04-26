import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';

interface ComponentProps {
  followers: React.ReactText;
  following: React.ReactText;
  posts: React.ReactText;
  onFollowersPress: () => void;
  onFollowingPress: () => void;
  onPostsPress: () => void;
  textStyle?: StyleProp<TextStyle>;
}

export type ProfileSocialsProps = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileSocialsComponent extends React.Component<ProfileSocialsProps> {

  private onFollowersButtonPress = () => {
    this.props.onFollowersPress();
  };

  private onFollowingButtonPress = () => {
    this.props.onFollowingPress();
  };

  private onPostsButtonPress = () => {
    this.props.onPostsPress();
  };

  public render(): React.ReactNode {
    const { style, themedStyle, textStyle, followers, following, posts, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <TouchableOpacity
          activeOpacity={0.65}
          style={themedStyle.parameterContainer}
          onPress={this.onFollowersButtonPress}>
          <Text style={[themedStyle.valueLabel, textStyle]}>{followers}</Text>
          <Text style={[themedStyle.hintLabel, textStyle]}>Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.65}
          style={themedStyle.parameterContainer}
          onPress={this.onFollowingButtonPress}>
          <Text style={[themedStyle.valueLabel, textStyle]}>{following}</Text>
          <Text style={[themedStyle.hintLabel, textStyle]}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.65}
          style={themedStyle.parameterContainer}
          onPress={this.onPostsButtonPress}>
          <Text style={[themedStyle.valueLabel, textStyle]}>{posts}</Text>
          <Text style={[themedStyle.hintLabel, textStyle]}>Posts</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const ProfileSocials = withStyles(ProfileSocialsComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parameterContainer: {
    alignItems: 'center',
  },
  valueLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    color: theme['font-primary-color'],
  },
  hintLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 13,
    lineHeight: 24,
    color: theme['color-basic-600'],
  },
}));