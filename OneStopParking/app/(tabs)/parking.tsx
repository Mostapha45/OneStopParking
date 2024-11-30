import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ParkingScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E8EAF6', dark: '#303F9F' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#3F51B5"
          name="car"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Parking Settings</ThemedText>
      </ThemedView>
      <ThemedText>
        Manage and customize your parking preferences directly from this screen.
      </ThemedText>
      <Collapsible title="Parking Spot Availability">
        <ThemedText>
          Use this app to check real-time availability of parking spots nearby.
        </ThemedText>
        <ExternalLink href="https://example.com/parking-availability">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Parking Permits">
        <ThemedText>
          Manage your parking permits for various locations. Add or renew permits conveniently.
        </ThemedText>
        <ExternalLink href="https://example.com/parking-permits">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Parking History">
        <ThemedText>
          View your parking history and receipts for better expense tracking.
        </ThemedText>
        <ExternalLink href="https://example.com/parking-history">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Payment Options">
        <ThemedText>
          Add or manage your payment methods to pay for parking seamlessly.
        </ThemedText>
        <ExternalLink href="https://example.com/parking-payments">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Notifications">
        <ThemedText>
          Enable notifications to get alerts about parking availability and expiry reminders.
        </ThemedText>
        <ExternalLink href="https://example.com/parking-notifications">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#3F51B5',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
