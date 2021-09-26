/**
 * Blackjack
 * Perfect information
 * - deck = c0, c1,...,cn-1
 * - 1 player vs dealer
 * - $1 bet/hand
 * - player can hit or stand
 *
 * subproblems: suffix Ci:
 * #subproblems = n
 *
 * guess : how many hits?
 * #choices <= n
 *
 * recurrence:
 * Bj(i) = max(outcome - {-1, K, 1}) + Bj(j)
 *         for j in range(i+4, n)
 *         if valid play
 */
